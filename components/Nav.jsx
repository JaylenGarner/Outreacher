"use client";

import { useSession } from "next-auth/react";
import LogoutButton from "./Buttons/LogoutButton";
import Link from "next/link";

const Nav = () => {
  const { data: session } = useSession();

  return (
    <div className="nav">
      <Link href="/dashboard">
        <div className="flex space-x-2 flex_center">
          <img src="/logo.png" className="w-20"></img>
          {/* <h1 className="text-3xl font-bold">Outreacher</h1> */}
        </div>
      </Link>

      <div className="flex space-x-4 items-center">
        <h1 className="font-bold text-xl">{session?.user?.firstName}</h1>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Nav;
