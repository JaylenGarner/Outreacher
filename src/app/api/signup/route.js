import User from "../../../../models/User";
import { dbConnect } from "../../../../lib/db";
import * as bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { firstName, lastName, email, username } = body;
    await dbConnect();

    const existingUser = await User.findOne().or([{ email }, { username }]);

    if (existingUser) {
      let error;

      if (existingUser.email === email) {
        error = "Email is in use";
      } else {
        error = "Username is taken";
      }

      return new Response(JSON.stringify(error), {
        status: 400,
      });
    }

    const user = await new User({
      firstName,
      lastName,
      email,
      username,
      password: await bcrypt.hash(body.password, 10),
    });

    await user.save();

    const { password, ...result } = user.toObject();
    return new Response(JSON.stringify(result), {
      status: 201,
    });
  } catch (error) {
    const errorObj = Object.values(error.errors);

    return new Response(JSON.stringify(errorObj[0].message), {
      status: 400,
    });
  }
};
