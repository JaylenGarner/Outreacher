import User from "../../../../../models/User";
import { dbConnect } from "../../../../../lib/db";

export const PUT = async (req, { params }) => {
  // ! Update Password option

  try {
    await dbConnect();
    const user = await User.findById(params.id);

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

//! Delete Account option
