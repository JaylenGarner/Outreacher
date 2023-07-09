"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const DeleteButton = ({ action }) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        onClick={() => action()}
      >
        <FontAwesomeIcon
          icon={faTrash}
          className="fa-xl hover:cursor-pointer hover:text-red-400"
        />
      </motion.button>
    </>
  );
};

export default DeleteButton;
