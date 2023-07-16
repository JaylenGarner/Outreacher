"use client";

import { useDispatch } from "react-redux";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const SettingsButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        onClick={() => {
          dispatch(setCurrentModal("Settings"));
        }}
      >
        <FontAwesomeIcon icon={faGear} className="fa-xl hover:cursor-pointer" />
      </motion.button>
    </>
  );
};

export default SettingsButton;
