import User from "../../../../models/User";
import { dbConnect } from "../../../../lib/db";

export const POST = async (req) => {
  const { firstName, lastName, email, username, password } = await req.sjon();
  try {
    await dbConnect();
    const newUser = new User({
      firstName,
      lastName,
      email,
      username,
      password,
    });

    await newUser.save();

    return new Response(JSON.stringify(newUser), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create new user. Error:", {
      status: 500,
    });
  }
};
