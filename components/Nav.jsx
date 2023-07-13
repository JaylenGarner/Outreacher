"use client";

import Link from "next/link";
import LogoutButton from "./Buttons/LogoutButton";

const Nav = () => {
  return (
    <div className="nav">
      <Link href="/dashboard">
        <div className="flex space-x-2 flex_center">
          <h1 className="text-2xl font-bold">Outreacher</h1>
          <img src="/logo-white.png" className="h-10" />
        </div>
      </Link>
      <LogoutButton />
    </div>
  );
};

export default Nav;
