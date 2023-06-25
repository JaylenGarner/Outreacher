"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const AuthButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <></>;
  }

  if (!session && !session?.user) {
    redirect("api/auth/signin");
  }

  return (
    <>
      <h1>{session?.user?.email}</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
};

export default AuthButton;
