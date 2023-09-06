"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const CopyButton = ({ content }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      transition={{ duration: 0.5 }}
      onClick={() => {
        navigator.clipboard.writeText(content);
      }}
    >
      <FontAwesomeIcon icon={faClone} className="fa-xl cursor-pointer" />
    </motion.div>
  );
};

export default CopyButton;
