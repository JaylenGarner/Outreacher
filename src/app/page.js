"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Home() {
  const { data: session, status } = useSession();

  redirect("/dashboard");
}
