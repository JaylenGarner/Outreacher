"use client";

import { useDispatch } from "react-redux";
import { clearApplications } from "@/redux/reducers/applicationSlice";
import { clearCurrentApplication } from "@/redux/reducers/currentApplication";
import { clearWorkflow } from "@/redux/reducers/workFlowSlice";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const AuthButton = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut();
    dispatch(clearApplications());
    dispatch(clearCurrentApplication());
    dispatch(clearWorkflow);
  };

  if (!session && !session?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex space-x-4">
      <h1 className="font-bold">{session?.user?.username}</h1>
      <button onClick={() => handleSignOut()}>Sign Out</button>
    </div>
  );
};

export default AuthButton;
