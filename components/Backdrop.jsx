"use client";

import { setCurrentModal } from "@/redux/reducers/currentModal";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import CreateApplication from "./Applications/CreateApplication";
import EditApplication from "./Applications/EditApplication";

import CreateContact from "./Contacts/CreateContact";
import EditContact from "./Contacts/EditContact";

const Backdrop = () => {
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
      {currentModal === "Create Application" && <CreateApplication />}
      {currentModal === "Edit Application" && <EditApplication />}
      {currentModal === "Create Contact" && <CreateContact />}
      {currentModal === "Edit Contact" && <EditContact />}
    </motion.div>
  );
};

export default Backdrop;
