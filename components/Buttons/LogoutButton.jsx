"use client";

import { useDispatch } from "react-redux";
import { clearApplications } from "@/redux/reducers/applicationSlice";
import { clearCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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
    <motion.div whileHover={{ scale: 1.2 }}>
      <button onClick={() => handleSignOut()}>
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          className="fa-xl cursor-pointer"
        />
      </button>
    </motion.div>
  );
};

export default LogoutButton;
