import prisma from "../../../../../lib/prisma";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { contactSchema } from "@/validations/contactValidation";
import getNextActionDate from "../../../../../lib/contact/getNextActionDate";

export const PUT = async (req, { params }) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("You must be signed in to edit contacts", {
        status: 401,
      });
    }

    const { name, title, email, linkedIn, outreachStage, outreachDate, notes } =
      await req.json();

    const reqObj = {
      userId: session.user.id,
      name,
      title,
      email,
      linkedIn,
      outreachStage,
      outreachDate,
      notes,
    };

    try {
      await contactSchema.validate(reqObj);
    } catch (error) {
      setError(error.message);
      return;
    }

    const contact = await prisma.contact.findUnique({
      where: { id: Number(params.id) },
    });

    if (!contact) {
      return new Response("Contact not found", { status: 404 });
    }

    if (session.user.id !== contact.userId) {
      return new Response("You are not the owner of this contact", {
        status: 401,
      });
    }

    const nextActionDate = getNextActionDate(outreachStage, outreachDate);

    const updatedContact = await prisma.contact.update({
      where: {
        id: Number(params.id),
      },
      data: { ...reqObj, nextActionDate },
    });

    return new Response(JSON.stringify(updatedContact), {
      status: 201,
    });
  } catch (error) {
    return new Response(`Failed to edit contact: ${error}`, {
      status: 500,
    });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("You must be signed in to perform this action", {
        status: 401,
      });
    }

    const contact = await prisma.application.findUnique({
      where: { id: Number(params.id) },
    });

    if (!contact) {
      return new Response("Contact not found", { status: 404 });
    }

    if (session.user.id !== contact.userId) {
      return new Response("You are not the owner of this contact", {
        status: 401,
      });
    }

    await prisma.contact.delete({
      where: {
        id: Number(params.id),
      },
    });

    return new Response("Contact deleted succesfully", { status: 202 });
  } catch (error) {
    return new Response(`Failed to delete contact: ${error}`, {
      status: 500,
    });
  }
};
