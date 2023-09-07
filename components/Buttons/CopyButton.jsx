"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const CopyButton = ({ content, handleShowCheck }) => {
  return (
    <div className="w-4">
      <motion.div
        whileHover={{ scale: 1.3 }}
        onClick={() => {
          navigator.clipboard.writeText(content);
          handleShowCheck();
        }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <FontAwesomeIcon icon={faClone} className="fa-xl cursor-pointer" />
      </motion.div>
    </div>
  );
};

export default CopyButton;
