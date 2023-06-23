import Application from "../../../../../models/Application";
import { dbConnect } from "../../../../../lib/db";

export const GET = async (req, { params }) => {
  try {
    await dbConnect();
    const application = await Application.findById(params.id);

    if (!application) {
      return new Response("Application not found", { status: 404 });
    }

    return new Response(JSON.stringify(application), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch application", { status: 500 });
  }
};
