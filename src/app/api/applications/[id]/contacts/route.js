import Contact from "../../../../../../models/Contact";
import { dbConnect } from "../../../../../../lib/db";

export const GET = async (req, { params }) => {
  try {
    await dbConnect();
    const contacts = await Contact.find({ application: params.id });

    if (!contacts || !contacts.length) {
      return new Response("No contacts found", { status: 404 });
    }

    return new Response(JSON.stringify(contacts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch contacts", { status: 500 });
  }
};
