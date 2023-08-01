import prisma from "../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { contactSchema } from "@/validations/contactValidation";
import getNextActionDate from "../../../../lib/contact/getNextActionDate";

export const GET = async (req) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return (
        new Response("You must be signed in to view your contacts"),
        { status: 401 }
      );
    }

    const contacts = await prisma.contact.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: "desc" },
    });

    return new Response(JSON.stringify(contacts), { status: 200 });
  } catch (error) {
    return new Response(`Failed to fetch contacts: ${error}`, { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();

    if (!session) {
      return new Response("You must be signed in to create a contact", {
        status: 401,
      });
    } else {
      body.userId = session.user.id;
    }

    const nextActionDate = getNextActionDate(
      body.outreachStage,
      body.outreachDate
    );
    body.nextActionDate = nextActionDate;

    try {
      await contactSchema.validate(body);
    } catch (error) {
      console.log("Validation error");
      setError(error.message);
      return;
    }

    console.log("Body", body);

    const contact = await prisma.contact.create({ data: body });

    console.log("PAST CREATION");

    return new Response(JSON.stringify(contact), { status: 201 });
  } catch (error) {
    return new Response(`Failed to create contact: ${error}`, { status: 500 });
  }
};
