import prisma from "../../../../lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const GET = async (req) => {
  try {
    const session = await getServerSession(authOptions);

    const applications = await prisma.application.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return new Response(JSON.stringify(applications), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch applications", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    const {
      userId,
      company,
      position,
      posting,
      salary,
      location,
      notes,
      status,
    } = await req.json();

    const application = await prisma.application.create({
      data: {
        userId,
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
    const errorObj = Object.values(error.errors);

    return new Response(JSON.stringify(errorObj[0].message), {
      status: 400,
    });
  }
};
