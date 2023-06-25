"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Layout = ({ children }) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <></>;
  }

  if (session && session?.user) {
    redirect("/dashboard");
  }

  return <div className="h-screen flex flex-center">{children}</div>;
};

export default Layout;
