import prisma from "../../../../lib/prisma";
import * as bcrypt from "bcrypt";
import { userSchema } from "@/validations/userValidation";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { firstName, email } = body;

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return new Response(JSON.stringify("Email is in use"), { status: 400 });
    }

    try {
      await userSchema.validate({ ...body });
    } catch (error) {
      setError(error.message);
      return;
    }

    const user = await prisma.user.create({
      data: {
        firstName,
        email,
        password: await bcrypt.hash(body.password, 10),
      },
    });

    const { password, ...result } = user;
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (error) {
    console.log(error);
  }
};
