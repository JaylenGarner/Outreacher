import prisma from "../../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { templateSchema } from "@/validations/templateValidation";

export const PUT = async (req, { params }) => {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    const userId = session.user.id;
    const templateId = Number(params.id);

    if (!session) {
      return new Response("You must be signed in to edit templates", {
        status: 401,
      });
    } else {
      body.userId = userId;
    }

    try {
      await templateSchema.validate(body);
    } catch (error) {
      setError(error.message);
      return;
    }

    const template = await prisma.template.findUnique({
      where: { id: templateId },
    });

    if (!template) {
      return new Response("Template not found", { status: 404 });
    }

    if (userId !== template.userId) {
      return new Response("You are not the owner of this template", {
        status: 401,
      });
    }

    const updatedTemplate = await prisma.template.update({
      where: { id: templateId },
      data: body,
    });

    return new Response(JSON.stringify(updatedTemplate), { status: 202 });
  } catch (error) {
    return new Response(`Failed to edit template: ${error}`, {
      status: 500,
    });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const session = await getServerSession(authOptions);
    const userId = session.user.id;
    const templateId = Number(params.id);

    if (!session) {
      return new Response("You must be signed in to perform this action", {
        status: 401,
      });
    }

    const template = await prisma.template.findUnique({
      where: { id: templateId },
    });

    if (!template) return new Response("Template not found", { status: 404 });

    if (userId !== template.userId) {
      return new Response("You are not the owner of this template", {
        status: 401,
      });
    }

    await prisma.template.delete({ where: { id: templateId } });

    return new Response("Template deleted successfully", { status: 202 });
  } catch (error) {
    return new Response(`Failed to delete template: ${error}`, {
      status: 500,
    });
  }
};
