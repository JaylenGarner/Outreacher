"use client";

import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

import CreateApplication from "./Applications/CreateApplication";
import EditApplication from "./Applications/EditApplication";
import CreateContact from "./Contacts/CreateContact";
import EditContact from "./Contacts/EditContact";
import ContactList from "./Contacts/ContactList";
import CreateTemplate from "./Templates/CreateTemplate";
import EditTemplate from "./Templates/EditTemplate";
import FillTemplate from "./Templates/FillTemplate";
import TemplateList from "./Templates/TemplateList";
import Info from "./Info";
import { setCurrentApplication } from "@/redux/reducers/applications/currentApplicationSlice";
import { setCurrentContact } from "@/redux/reducers/contacts/currentContactSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const currentModal = useSelector((state) => state.currentModal);

  const handleClick = () => {
    if (
      currentModal === "Signup" ||
      currentModal === "Create Application" ||
      currentModal === "Create Contact" ||
      currentModal === "Fill Template"
    ) {
      return;
    } else {
      dispatch(setCurrentModal(null));
      dispatch(setCurrentApplication(null));
      dispatch(setCurrentContact(null));
    }
  };

  console.log(currentModal);

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
        {currentModal === "Signup" && <Signup />}
        {currentModal === "Create Application" && <CreateApplication />}
        {currentModal === "Edit Application" && <EditApplication />}
        {currentModal === "Create Contact" && <CreateContact />}
        {currentModal === "Edit Contact" && <EditContact />}
        {currentModal === "Contact List" && <ContactList />}
        {currentModal === "Create Template" && <CreateTemplate />}
        {currentModal === "Edit Template" && <EditTemplate />}
        {currentModal === "Template List" && <TemplateList />}
        {currentModal === "Template List (Fill)" && <TemplateList />}
        {currentModal === "Fill Template" && <FillTemplate />}
        {currentModal === "Info" && <Info />}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
