// import User from "../../../../models/User";
// import { dbConnect } from "../../../../lib/db";
import prisma from "../../../../lib/prisma";
import * as bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { email, password } = body;
    // await dbConnect();

    console.log("Start of login route");

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    console.log("USER", user);

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...userWithoutPassword } = user;

      console.log("user without password", userWithoutPassword);

      return new Response(JSON.stringify(userWithoutPassword));
    } else {
      console.log("HIT THE ELSE");
      return new Response(JSON.stringify(null));
    }
  } catch (error) {
    console.log("ERROR");
    return new Response("The email or password is incorrect");
  }
};
