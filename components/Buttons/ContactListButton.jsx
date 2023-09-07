"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ContactListButton = ({ application }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setCurrentApplication(application));
        dispatch(setCurrentModal("Contact List"));
      }}
      className="hover:cursor-pointer"
    >
      <FontAwesomeIcon icon={faAddressBook} className="fa-xl" />
    </motion.div>
  );
};

export default ContactListButton;
