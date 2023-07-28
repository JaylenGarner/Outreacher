import prisma from "../../../../../lib/prisma";
import getNextActionDate from "../../../../../lib/contact/getNextActionDate";

export const PUT = async (req, { params }) => {
  const { name, title, email, linkedIn, outreachStage, outreachDate, notes } =
    await req.json();

  try {
    const nextActionDate = getNextActionDate(outreachStage, outreachDate);

    const contact = await prisma.contact.update({
      where: {
        id: Number(params.id),
      },
      data: {
        name,
        title,
        email,
        linkedIn,
        outreachStage,
        outreachDate,
        notes,
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

export const DELETE = async (req, { params }) => {
  try {
    const contact = await prisma.contact.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!contact) {
      return new Response("Contact not found", { status: 404 });
    }

    return new Response("Contact deleted succesfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete contact", { status: 500 });
  }
};
