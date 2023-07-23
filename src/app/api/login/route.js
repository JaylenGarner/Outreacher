import prisma from "../../../../lib/prisma";
import * as bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...userWithoutPassword } = user;
      return new Response(JSON.stringify(userWithoutPassword));
    } else {
      return new Response("Invalid credentials, please try again.");
    }
  } catch (error) {
    console.log("error");
  }
};
