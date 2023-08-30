"use client";

import { useSession } from "next-auth/react";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { useDispatch } from "react-redux";
import LogoutButton from "./Buttons/LogoutButton";
import Link from "next/link";

import { motion } from "framer-motion";

const Nav = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  return (
    <div className="nav">
      <Link href="/dashboard">
        <div className="flex space-x-2 flex_center">
          <img src="/logo.png" className="w-20"></img>
        </div>
      </Link>

      <div className="space-x-6 flex">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <span
            onClick={() => dispatch(setCurrentModal("Template List"))}
            className="font-bold text-2xl cursor-pointer"
          >
            Templates
          </span>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <span
            onClick={() => dispatch(setCurrentModal("Info"))}
            className="font-bold text-2xl cursor-pointer"
          >
            Info
          </span>
        </motion.div>
      </div>

      <div className="flex space-x-4 items-center">
        <h1 className="font-bold text-2xl">{session?.user?.firstName}</h1>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Nav;
