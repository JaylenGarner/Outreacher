import Application from "../../../../../models/Application";
import { dbConnect } from "../../../../../lib/db";

export const POST = async (req) => {
  const {
    userId,
    company,
    position,
    posting,
    salary,
    location,
    notes,
    status,
  } = await req.json();

  try {
    await dbConnect();
    const newApplication = new Application({
      userId,
      company,
      position,
      posting,
      salary,
      location,
      notes,
      status,
    });

    await newApplication.save();

    return new Response(JSON.stringify(newApplication), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create new application", {
      status: 500,
    });
  }
};
