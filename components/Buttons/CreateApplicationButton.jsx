"use client";

import { useDispatch } from "react-redux";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const CreateApplicationButton = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      transition={{ duration: 0.5 }}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setCurrentModal("Create Application"));
      }}
      className="hover:cursor-pointer"
    >
      <FontAwesomeIcon icon={faFileCirclePlus} className="fa-2xl text-white" />
    </motion.div>
  );
};

export default CreateApplicationButton;
