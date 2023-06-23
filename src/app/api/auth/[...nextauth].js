import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../../models/User";
import { dbConnect } from "../../../../../lib/db";

providers: [
  CredentialsProvider({
    name: "Credentials",

    credentials: {
      username: { label: "Username", type: "text", placeholder: "username" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials, req) {
      await dbConnect();

      const res = await fetch("/api/login", {
        method: POST,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: credentials.username,
          password: credentials.password,
        }),
      });

      const user = await res.json();

      if (user) {
        return user;
      } else {
        return null;
      }
    },
  }),
];
