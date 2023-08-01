import prisma from "../../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { applicationSchema } from "@/validations/applicationValidation";

export const PUT = async (req, { params }) => {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    const userId = session.user.id;
    const applicationId = Number(params.id);

    if (!session) {
      return new Response("You must be signed in to edit applications", {
        status: 401,
      });
    } else {
      body.userId = userId;
    }

    try {
      await applicationSchema.validate(body);
    } catch (error) {
      setError(error.message);
      return;
    }

    const application = await prisma.application.findUnique({
      where: { id: applicationId },
    });

    if (!application) {
      return new Response("Application not found", { status: 404 });
    }

    if (userId !== application.userId) {
      return new Response("You are not the owner of this application", {
        status: 401,
      });
    }

    const updatedApplication = await prisma.application.update({
      where: { id: applicationId },
      data: body,
    });

    return new Response(JSON.stringify(updatedApplication), { status: 202 });
  } catch (error) {
    return new Response(`Failed to edit application: ${error}`, {
      status: 500,
    });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const session = await getServerSession(authOptions);
    const userId = session.user.id;
    const applicationId = Number(params.id);

    if (!session) {
      return new Response("You must be signed in to perform this action", {
        status: 401,
      });
    }

    const application = await prisma.application.findUnique({
      where: { id: applicationId },
    });

    if (!application)
      return new Response("Application not found", { status: 404 });

    if (userId !== application.userId) {
      return new Response("You are not the owner of this application", {
        status: 401,
      });
    }

    await prisma.application.delete({ where: { id: applicationId } });

    return new Response("Application deleted successfully", { status: 202 });
  } catch (error) {
    return new Response(`Failed to delete application: ${error}`, {
      status: 500,
    });
  }
};
