"use client";

import { useSession } from "next-auth/react";
import SettingsButton from "./Buttons/SettingsButton";
import LogoutButton from "./Buttons/LogoutButton";
import Link from "next/link";

const Nav = () => {
  const { data: session } = useSession();

  return (
    <div className="nav">
      <Link href="/dashboard">
        <div className="flex space-x-2 flex_center">
          <h1 className="text-2xl font-bold">Outreacher</h1>
          <img src="/logo-white.png" className="h-10" />
        </div>
      </Link>

      <div className="flex space-x-4 items-center">
        <h1 className="font-bold text-xl">{session?.user?.firstName}</h1>
        <SettingsButton />
        <LogoutButton />
      </div>
    </div>
  );
};

export default Nav;
