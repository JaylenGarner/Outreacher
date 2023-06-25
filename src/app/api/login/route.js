import User from "../../../../models/User";
import { dbConnect } from "../../../../lib/db";
import * as bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { username, password } = body;
    await dbConnect();

    const user = await User.find({
      username,
    });

    if (user && (await bcrypt.compare(password, user[0].password))) {
      const { password, ...userWithoutPassword } = user[0].toObject();

      return new Response(JSON.stringify(userWithoutPassword));
    } else {
      return new Response(JSON.stringify(null));
    }
  } catch (error) {
    return new Response("The username or password is incorrect");
  }
};
