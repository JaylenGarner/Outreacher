import prisma from "../../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { contactSchema } from "@/validations/contactValidation";
import getNextActionDate from "../../../../../lib/helpers/getNextActionDate";

export const PUT = async (req, { params }) => {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    const userId = session.user.id;
    const contactId = Number(params.id);

    if (!session) {
      return new Response("You must be signed in to edit contacts", {
        status: 401,
      });
    } else {
      body.userId = userId;
    }

    try {
      await contactSchema.validate(body);
    } catch (error) {
      setError(error.message);
      return;
    }

    const contact = await prisma.contact.findUnique({
      where: { id: contactId },
    });

    if (!contact) return new Response("Contact not found", { status: 404 });

    if (userId !== contact.userId) {
      return new Response("You are not the owner of this contact", {
        status: 401,
      });
    }

    const nextActionDate = getNextActionDate(
      body.outreachStage,
      body.outreachDate
    );
    body.nextActionDate = nextActionDate;

    const updatedContact = await prisma.contact.update({
      where: { id: contactId },
      data: body,
    });

    return new Response(JSON.stringify(updatedContact), { status: 201 });
  } catch (error) {
    return new Response(`Failed to edit contact: ${error}`, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const session = await getServerSession(authOptions);
    const contactId = Number(params.id);

    if (!session) {
      return new Response("You must be signed in to perform this action", {
        status: 401,
      });
    }

    const contact = await prisma.contact.findUnique({
      where: { id: contactId },
    });

    if (!contact) return new Response("Contact not found", { status: 404 });

    if (session.user.id !== contact.userId) {
      return new Response("You are not the owner of this contact", {
        status: 401,
      });
    }

    await prisma.contact.delete({ where: { id: contactId } });

    return new Response("Contact deleted succesfully", { status: 202 });
  } catch (error) {
    return new Response(`Failed to delete contact: ${error}`, { status: 500 });
  }
};
