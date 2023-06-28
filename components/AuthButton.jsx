"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const AuthButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <></>;
  }

  if (!session && !session?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex space-x-4">
      <h1 className="font-bold">{session?.user?.username}</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default AuthButton;
