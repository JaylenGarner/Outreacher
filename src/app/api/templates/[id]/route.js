import prisma from "../../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
// import { applicationSchema } from "@/validations/applicationValidation";

export const PUT = async (req, { params }) => {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    const userId = session.user.id;
    const templateId = Number(params.id);

    console.log("START", body);
    if (!session) {
      return new Response("You must be signed in to edit templates", {
        status: 401,
      });
    } else {
      body.userId = userId;
    }

    try {
      //   await applicationSchema.validate(body);
    } catch (error) {
      setError(error.message);
      return;
    }

    const template = await prisma.template.findUnique({
      where: { id: templateId },
    });

    console.log("TEMPLATE", template);

    if (!template) {
      return new Response("Template not found", { status: 404 });
    }

    if (userId !== template.userId) {
      return new Response("You are not the owner of this template", {
        status: 401,
      });
    }

    try {
      const updatedTemplate = await prisma.template.update({
        where: { id: templateId },
        data: body,
      });
    } catch (error) {
      console.log("ERROR", error);
    }
    const updatedTemplate = await prisma.template.update({
      where: { id: templateId },
      data: body,
    });

    console.log("MIDDLE");

    console.log("HERE", updatedTemplate);

    return new Response(JSON.stringify(updatedTemplate), { status: 202 });
  } catch (error) {
    return new Response(`Failed to edit template: ${error}`, {
      status: 500,
    });
  }
};

// export const DELETE = async (req, { params }) => {
//   try {
//     const session = await getServerSession(authOptions);
//     const userId = session.user.id;
//     const applicationId = Number(params.id);

//     if (!session) {
//       return new Response("You must be signed in to perform this action", {
//         status: 401,
//       });
//     }

//     const application = await prisma.application.findUnique({
//       where: { id: applicationId },
//     });

//     if (!application)
//       return new Response("Application not found", { status: 404 });

//     if (userId !== application.userId) {
//       return new Response("You are not the owner of this application", {
//         status: 401,
//       });
//     }

//     await prisma.application.delete({ where: { id: applicationId } });

//     return new Response("Application deleted successfully", { status: 202 });
//   } catch (error) {
//     return new Response(`Failed to delete application: ${error}`, {
//       status: 500,
//     });
//   }
// };
