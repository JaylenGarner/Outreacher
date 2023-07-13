"use client";

import { useDispatch } from "react-redux";
import { clearApplications } from "@/redux/reducers/applicationSlice";
import { clearCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const LogoutButton = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut();
    dispatch(clearApplications());
    dispatch(clearCurrentApplication());
  };

  if (!session && !session?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex space-x-4">
      <h1 className="font-bold">{session?.user?.firstName}</h1>
      <button onClick={() => handleSignOut()}>Sign Out</button>
    </div>
  );
};

export default LogoutButton;
