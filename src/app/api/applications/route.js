import Application from "../../../../models/Application";
import { dbConnect } from "../../../../lib/db";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const GET = async (req) => {
  try {
    const session = await getServerSession(authOptions);
    await dbConnect();

    const applications = await Application.find({
      user: session.user._id,
      // Sort by most recent
    }).sort({ updatedAt: -1 });

    if (!applications) {
      return new Response("No applications found", { status: 404 });
    }

    return new Response(JSON.stringify(applications), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch applications", { status: 500 });
  }
};
