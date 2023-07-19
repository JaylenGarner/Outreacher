"use client";

import { useDispatch } from "react-redux";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const AuthButton = ({ type }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      onClick={() => {
        type === "Login"
          ? dispatch(setCurrentModal("Login"))
          : dispatch(setCurrentModal("Signup"));
      }}
      className="bg-white w-[200px] h-[50px] rounded-full flex flex_center font-bold text-xl cursor-pointer"
    >
      {type}
    </motion.div>
  );
};

export default AuthButton;
