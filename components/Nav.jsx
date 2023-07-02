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
    <div className="flex justify-between items-center border-b p-3 border-slate-500 bg-slate-900 text-white">
      <Link href="/dashboard">
        <div className="flex space-x-2 flex_center">
          <h1 className="text-2xl font-bold">Outreacher</h1>
          <img src="/logo-white.png" className="h-10 " />
        </div>
      </Link>
      <AuthButton />
    </div>
  );
};

export default Nav;
