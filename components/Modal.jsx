"use client";

import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import CreateApplication from "./Applications/CreateApplication";
import EditApplication from "./Applications/EditApplication";
import CreateContact from "./Contacts/CreateContact";
import ContactList from "./Contacts/ContactList";

const Modal = () => {
  const dispatch = useDispatch();
  const currentModal = useSelector((state) => state.currentModalReducer);

  const handleClick = () => {
    if (
      currentModal === "Create Application" ||
      currentModal === "Create Contact"
    )
      return;
    dispatch(setCurrentModal(null));
  };

  return (
    <motion.div className="backdrop" onClick={handleClick}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 230,
          damping: 30,
        }}
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        {currentModal === "Create Application" && <CreateApplication />}
        {currentModal === "Edit Application" && <EditApplication />}
        {currentModal === "Create Contact" && <CreateContact />}
        {/* {currentModal === "Edit Contact" && <EditContact />} */}
        {currentModal === "Contact List" && <ContactList />}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
