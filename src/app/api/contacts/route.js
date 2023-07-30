import prisma from "../../../../lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
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
      where: {
        userId: session.user.id,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return new Response(JSON.stringify(contacts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(`Failed to fetch contacts: ${error}`, {
      status: 500,
    });
  }
};

export const POST = async (req) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return (
        new Response("You must be signed in to create a contact"),
        { status: 401 }
      );
    }

    const {
      applicationId,
      name,
      title,
      email,
      linkedIn,
      notes,
      outreachStage,
      outreachDate,
    } = await req.json();

    const nextActionDate = getNextActionDate(outreachStage, outreachDate);

    const contact = await prisma.contact.create({
      data: {
        userId: session.user.id,
        applicationId,
        name,
        title,
        email,
        linkedIn,
        notes,
        outreachStage,
        outreachDate,
        nextActionDate,
      },
    });

    return new Response(JSON.stringify(contact), {
      status: 201,
    });
  } catch (error) {
    return new Response(`Failed to create contact: ${error}`, {
      status: 500,
    });
  }
};
