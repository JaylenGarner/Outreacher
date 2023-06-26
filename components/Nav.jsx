"use client";

import { useSession } from "next-auth/react";
import AuthButton from "./AuthButton";
import { redirect } from "next/navigation";

const Nav = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <></>;
  }

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="flex justify-between border-b p-2 border-slate-500">
      <a href="/">
        <h1 className="text-xl font-bold">Outreacher</h1>
      </a>
      <AuthButton />
    </div>
  );
};

export default Nav;
