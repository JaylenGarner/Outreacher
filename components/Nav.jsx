"use client";

import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { getApplications } from "@/redux/reducers/applicationSlice";
import { redirect } from "next/navigation";
import Link from "next/link";
import AuthButton from "./AuthButton";

const Nav = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  if (status === "loading") {
    return <></>;
  }

  if (!session) {
    return redirect("/auth/login");
  }

  const fetchApplications = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/applications`);
      const data = await response.json();
      dispatch(getApplications(data));
    } catch (error) {
      console.log(error);
    }
  };

  if (status === "authenticated") {
    fetchApplications();
  }

  return (
    <div className="flex justify-between items-center border-b p-2 border-slate-500 h-16 bg-slate-900 text-white ">
      <Link href="/dashboard">
        <h1 className="text-xl font-bold">Outreacher</h1>
      </Link>
      <AuthButton />
    </div>
  );
};

export default Nav;
