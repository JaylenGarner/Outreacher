"use client";

import { useSession } from "next-auth/react";
import AuthButton from "./AuthButton";
import { redirect } from "next/navigation";
import Link from "next/link";

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
      <Link href="/dashboard">
        <h1 className="text-xl font-bold">Outreacher</h1>
      </Link>

      <Link href="/applications">
        <h1 className="text-lg">Applications</h1>
      </Link>

      <AuthButton />
    </div>
  );
};

export default Nav;
