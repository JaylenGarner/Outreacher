"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const DeleteButton = ({ action }) => {
  return (
    <>
      <motion.button whileHover={{ scale: 1.3 }} onClick={() => action()}>
        <FontAwesomeIcon
          icon={faTrash}
          className="fa-xl hover:cursor-pointer hover:text-[#FF0066]"
        />
      </motion.button>
    </>
  );
};

export default DeleteButton;
