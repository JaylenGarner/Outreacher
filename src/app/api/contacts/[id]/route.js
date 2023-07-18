import Contact from "../../../../../models/Contact";
import { dbConnect } from "../../../../../lib/db";
import getNextActionDate from "../../../../../lib/contact/getNextActionDate";

export const PUT = async (req, { params }) => {
  const { name, title, email, linkedIn, outreachStage, outreachDate, notes } =
    await req.json();

  try {
    await dbConnect();

    const contact = await Contact.findById(params.id);

    if (name) contact.name = name;
    if (title) contact.title = title;
    if (email) contact.email = email;
    if (linkedIn) contact.linkedIn = linkedIn;
    if (outreachStage) contact.outreachStage = outreachStage;
    if (outreachDate) contact.outreachDate = outreachDate;
    if (notes) contact.notes = notes;

    const nextActionDate = getNextActionDate(outreachStage, outreachDate);
    contact.nextActionDate = nextActionDate;

    await contact.save();

    return new Response(JSON.stringify(contact), {
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

    const deletedContact = await Contact.findByIdAndDelete(params.id);

    if (!deletedContact) {
      return new Response("Contact not found", { status: 404 });
    }

    return new Response("Contact deleted succesfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete contact", { status: 500 });
  }
};
