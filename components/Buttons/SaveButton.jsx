"use client";

import { motion } from "framer-motion";

const SaveButton = ({ type }) => {
  return (
    <motion.button
      transition={{ duration: 0.7 }}
      initial={{
        background: "linear-gradient(to bottom right, #FF0066, #4916A1)",
      }}
      whileHover={{
        scale: 1.02,
        opacity: 0.95,
        background: "linear-gradient(to right, #4916A1 , #FF0066)",
      }}
      whileTap={{ scale: 0.8 }}
      type="submit"
      className="button "
    >
      {type === "Create" ? "Log" : "Save"}
    </motion.button>
  );
};

export default SaveButton;
