import prisma from "../../../../lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getNextActionDate from "../../../../lib/contact/getNextActionDate";

export const GET = async (req) => {
  try {
    const session = await getServerSession(authOptions);

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
    return new Response("Failed to fetch contacts", { status: 500 });
  }
};

export const POST = async (req) => {
  const {
    userId,
    applicationId,
    name,
    title,
    email,
    linkedIn,
    notes,
    outreachStage,
    outreachDate,
  } = await req.json();

  try {
    const nextActionDate = getNextActionDate(outreachStage, outreachDate);

    const contact = await prisma.contact.create({
      data: {
        userId,
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
    const errorObj = Object.values(error.errors);

    return new Response(JSON.stringify(errorObj[0].message), {
      status: 400,
    });
  }
};
