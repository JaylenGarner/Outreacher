import User from "../../../../models/User";
import { dbConnect } from "../../../../lib/db";
import * as bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { firstName, lastName, email, username } = body;
    await dbConnect();

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
    console.log(error);
    return new Response("Failed to create new user.", {
      status: 500,
    });
  }
};
