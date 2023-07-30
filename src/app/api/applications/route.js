import prisma from "../../../../lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { applicationSchema } from "@/validations/applicationValidation";

export const GET = async (req) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return (
        new Response("You must be signed in to view your applications"),
        { status: 401 }
      );
    }

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
    return new Response(`Failed to fetch applications: ${error}`, {
      status: 500,
    });
  }
};

export const POST = async (req) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return (
        new Response("You must be signed in to create an application"),
        { status: 401 }
      );
    }

    const { company, position, posting, salary, location, notes, status } =
      await req.json();

    const reqObj = {
      userId: session.user.id,
      company,
      position,
      posting,
      salary,
      location,
      notes,
      status,
    };

    try {
      await applicationSchema.validate(reqObj);
    } catch (error) {
      setError(error.message);
      return;
    }

    const application = await prisma.application.create({
      data: reqObj,
    });

    return new Response(JSON.stringify(application), {
      status: 201,
    });
  } catch (error) {
    return new Response(`Failed to create application: ${error}`, {
      status: 500,
    });
  }
};
