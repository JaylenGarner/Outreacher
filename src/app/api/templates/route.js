import prisma from "../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export const GET = async (req) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return (
        new Response("You must be signed in to view your templates"),
        { status: 401 }
      );
    }

    const templates = await prisma.template.findMany({
      where: { userId: session.user.id },
    });

    return new Response(JSON.stringify(templates), { status: 200 });
  } catch (error) {
    return new Response(`Failed to fetch templates: ${error}`, {
      status: 500,
    });
  }
};

export const POST = async (req) => {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();

    if (!session) {
      return (
        new Response("You must be signed in to create a template"),
        { status: 401 }
      );
    } else {
      body.userId = session.user.id;
    }

    try {
      //   await applicationSchema.validate(body);
    } catch (error) {
      setError(error.message);
      return;
    }

    const template = await prisma.template.create({ data: body });

    return new Response(JSON.stringify(template), { status: 201 });
  } catch (error) {
    return new Response(`Failed to create template: ${error}`, {
      status: 500,
    });
  }
};
