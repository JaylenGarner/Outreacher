"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Checkmark = () => {
  return (
    <motion.div
      initial={{ rotate: 90, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
      }}
    >
      <FontAwesomeIcon icon={faCheck} className="fa-xl text-green-500" />
    </motion.div>
  );
};

export default Checkmark;
