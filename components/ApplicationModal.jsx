"use client";

import { setCurrentModal } from "@/redux/reducers/currentModal";
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ApplicationModal = () => {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.currentApplicationReducer);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 230,
        damping: 30,
      }}
      className="bg-white h-3/6 w-3/6 rounded-xl z-20"
      onClick={(e) => {
        // Prevents the modal from closing upon interaction
        e.stopPropagation();
      }}
    >
      {application?.company}
    </motion.div>
  );
};

export default ApplicationModal;
