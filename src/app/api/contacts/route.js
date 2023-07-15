import Contact from "../../../../models/Contact";
import { dbConnect } from "../../../../lib/db";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getNextActionDate from "../../../../lib/contact/getNextActionDate";

export const GET = async (req) => {
  try {
    const session = await getServerSession(authOptions);
    await dbConnect();

    const contacts = await Contact.find({
      user: session.user._id,
      // Sort by most recent
    }).sort({ updatedAt: -1 });

    if (!contacts) {
      return new Response("No contacts found", { status: 404 });
    }

    return new Response(JSON.stringify(contacts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch contacts", { status: 500 });
  }
};

export const POST = async (req) => {
  const {
    userId,
    applicationId,
    name,
    title,
    email,
    number,
    linkedIn,
    notes,
    outreachStage,
    outreachDate,
  } = await req.json();

  try {
    const nextActionDate = getNextActionDate(outreachStage, outreachDate);
    await dbConnect();

    const newContact = new Contact({
      user: userId,
      application: applicationId,
      name,
      title,
      email,
      number,
      linkedIn,
      notes,
      outreachStage,
      outreachDate,
      nextActionDate,
    });

    await newContact.save();

    return new Response(JSON.stringify(newContact), {
      status: 201,
    });
  } catch (error) {
    const errorObj = Object.values(error.errors);

    return new Response(JSON.stringify(errorObj[0].message), {
      status: 400,
    });
  }
};
