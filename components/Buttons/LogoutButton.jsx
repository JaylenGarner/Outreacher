"use client";

import { useDispatch } from "react-redux";
import { clearApplications } from "@/redux/reducers/applications/applicationSlice";
import { clearCurrentApplication } from "@/redux/reducers/applications/currentApplicationSlice";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/tooltip";

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
    <motion.div whileHover={{ scale: 1.2, opacity: 0.8 }}>
      <Tooltip
        content="Logout"
        className="tooltip"
        placement="top"
        closeDelay={50}
      >
        <button className="focus:outline-none" onClick={() => handleSignOut()}>
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="fa-xl cursor-pointer"
          />
        </button>
      </Tooltip>
    </motion.div>
  );
};

export default LogoutButton;
