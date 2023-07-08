import Contact from "../../../../models/Contact";
import { dbConnect } from "../../../../lib/db";

export const POST = async (req) => {
  const {
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
    await dbConnect();

    const newContact = new Contact({
      application: applicationId,
      name,
      title,
      email,
      number,
      linkedIn,
      notes,
      outreachStage,
      outreachDate,
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
