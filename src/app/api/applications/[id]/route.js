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
    return new Response("Failed to fetch application", { status: 500 });
  }
};

export const PUT = async (req, { params }) => {
  const { company, position, posting, salary, location, notes, status } =
    await req.json();

  try {
    await dbConnect();
    const application = await Application.findById(params.id);

    if (company) application.company = company;
    if (position) application.position = position;
    if (posting) application.posting = posting;
    if (salary) application.salary = salary;
    if (location) application.location = location;
    if (notes) application.notes = notes;
    if (status) application.status = status;

    await application.save();

    return new Response(JSON.stringify(application), {
      status: 201,
    });
  } catch (error) {
    const errorObj = Object.values(error.errors);

    return new Response(JSON.stringify(errorObj[0].message), {
      status: 400,
    });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await dbConnect();
    const deletedApplication = await Application.findByIdAndDelete(params.id);

    if (!deletedApplication) {
      return new Response("Application not found", { status: 404 });
    }

    return new Response("Application deleted succesfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete application", { status: 500 });
  }
};
