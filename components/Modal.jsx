"use client";

import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import Login from "./Auth/Login";
import CreateApplication from "./Applications/CreateApplication";
import EditApplication from "./Applications/EditApplication";
import CreateContact from "./Contacts/CreateContact";
import EditContact from "./Contacts/EditContact";
import ContactList from "./Contacts/ContactList";
import Settings from "./Settings";
import { setCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { setCurrentContact } from "@/redux/reducers/currentContactSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const currentModal = useSelector((state) => state.currentModal);

  const handleClick = () => {
    if (
      currentModal === "Create Application" ||
      currentModal === "Create Contact"
    ) {
      return;
    } else {
      dispatch(setCurrentModal(null));
      dispatch(setCurrentApplication(null));
      dispatch(setCurrentContact(null));
    }
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
        {currentModal === "Login" && <Login />}
        {currentModal === "Create Application" && <CreateApplication />}
        {currentModal === "Edit Application" && <EditApplication />}
        {currentModal === "Create Contact" && <CreateContact />}
        {currentModal === "Edit Contact" && <EditContact />}
        {currentModal === "Contact List" && <ContactList />}
        {currentModal === "Settings" && <Settings />}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
