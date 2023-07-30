import prisma from "../../../../../lib/prisma";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const PUT = async (req, { params }) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("You must be signed in to edit applications", {
        status: 401,
      });
    }

    const { company, position, posting, salary, location, notes, status } =
      await req.json();

    const application = await prisma.application.findUnique({
      where: { id: Number(params.id) },
    });

    if (!application) {
      return new Response("Application not found", { status: 404 });
    }

    if (session.user.id !== application.userId) {
      return new Response("You are not the owner of this application", {
        status: 401,
      });
    }

    const updatedApplication = await prisma.application.update({
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

    return new Response(JSON.stringify(updatedApplication), {
      status: 202,
    });
  } catch (error) {
    return new Response(`Failed to edit application: ${error}`, {
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

    const application = await prisma.application.findUnique({
      where: { id: Number(params.id) },
    });

    if (!application) {
      return new Response("Application not found", { status: 404 });
    }

    if (session.user.id !== application.userId) {
      return new Response("You are not the owner of this application", {
        status: 401,
      });
    }

    await prisma.application.delete({
      where: {
        id: Number(params.id),
        userId: session.user.id,
      },
    });

    return new Response("Application deleted successfully", { status: 202 });
  } catch (error) {
    return new Response(`Failed to delete application: ${error}`, {
      status: 500,
    });
  }
};
