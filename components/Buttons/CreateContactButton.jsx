"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const CreateContactButton = ({ application }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.5 }}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setCurrentApplication(application));
        dispatch(setCurrentModal("Create Contact"));
      }}
    >
      <FontAwesomeIcon
        icon={faUserPlus}
        className="fa-xl hover:cursor-pointer"
      />
    </motion.div>
  );
};

export default CreateContactButton;
