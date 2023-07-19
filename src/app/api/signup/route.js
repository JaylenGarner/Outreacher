import User from "../../../../models/User";
import { dbConnect } from "../../../../lib/db";
import * as bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { firstName, email } = body;
    await dbConnect();

    console.log(body);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new Response(JSON.stringify("Email is in use"), {
        status: 400,
      });
    }

    const user = new User({
      firstName,
      email,
      password: await bcrypt.hash(body.password, 10),
    });

    console.log("user creation", user);

    await user.save();

    const { password, ...result } = user.toObject();
    return new Response(JSON.stringify(result), {
      status: 201,
    });
  } catch (error) {
    const errorObj = Object.values(error.errors);
    console.log(error);
    return new Response(JSON.stringify(errorObj[0].message), {
      status: 400,
    });
  }
};
