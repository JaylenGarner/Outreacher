"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { handleOutreach } from "../../lib/handlers/contact/handleOutreach";
import { useDispatch } from "react-redux";
import { clearCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { clearCurrentContact } from "@/redux/reducers/currentContactSlice";
import { clearCurrentTemplate } from "@/redux/reducers/currentTemplateSlice";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
import { createContact } from "@/redux/reducers/contactSlice";

const Checkmark = ({ contact }) => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const updatedContact = await handleOutreach(contact);

    if (updatedContact) {
      dispatch(createContact(updatedContact));
      dispatch(clearCurrentModal());
      dispatch(clearCurrentContact());
      dispatch(clearCurrentTemplate());
      dispatch(clearCurrentApplication());
      // dispatch(setContactFormLoaded(false));
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      initial={{ rotate: 90, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
      }}
    >
      <FontAwesomeIcon
        icon={faCheck}
        className="fa-xl text-green-500 cursor-pointer"
        onClick={handleSubmit}
      />
    </motion.div>
  );
};

export default Checkmark;
