import prisma from "../../../../../lib/prisma";

export const PUT = async (req, { params }) => {
  const { company, position, posting, salary, location, notes, status } =
    await req.json();

  try {
    const application = await prisma.application.update({
      where: {
        id: Number(params.id),
      },
      data: {
        company,
        position,
        posting,
        salary,
        location,
        notes,
        status,
      },
    });

    return new Response(JSON.stringify(application), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    // const errorObj = Object.values(error.errors);

    // return new Response(JSON.stringify(errorObj[0].message), {
    //   status: 400,
    // });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const application = await prisma.application.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!application) {
      return new Response("Application not found", { status: 404 });
    }

    return new Response("Application deleted succesfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete application", { status: 500 });
  }
};
