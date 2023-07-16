// import Application from "../../../../../models/Application";
// import Contact from "../../../../../models/Contact";
import User from "../../../../../models/User";
import { dbConnect } from "../../../../../lib/db";

export const PUT = async (req, { params }) => {
  const { tooltipsEnabled } = await req.json();

  try {
    await dbConnect();
    const user = await User.findById(params.id);

    // console.log("user", user);
    console.log("From form: ", tooltipsEnabled);
    console.log(" In DB", user.tooltipsEnabled);

    user.tooltipsEnabled = tooltipsEnabled;

    console.log("Post change", user.tooltipsEnabled);

    await user.save();

    return new Response(JSON.stringify(user), {
      status: 201,
    });
  } catch (error) {
    const errorObj = Object.values(error.errors);

    return new Response(JSON.stringify(errorObj[0].message), {
      status: 400,
    });
  }
};
