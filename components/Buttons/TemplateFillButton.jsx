"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { setCurrentContact } from "@/redux/reducers/currentContactSlice";

const TemplateFillButton = ({ contact, application }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      transition={{ duration: 0.5 }}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setCurrentApplication(application));
        dispatch(setCurrentContact(contact));
        dispatch(setCurrentModal("Template List (Fill)"));
      }}
    >
      <FontAwesomeIcon icon={faPaperPlane} className="fa-xl cursor-pointer" />
    </motion.div>
  );
};

export default TemplateFillButton;
