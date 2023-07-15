"use client";

import { useDispatch } from "react-redux";
import { setCurrentContact } from "@/redux/reducers/currentContactSlice";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import ApplicationButton from "../Buttons/ApplicationButton";

import { motion } from "framer-motion";

const ContactCard = ({ contact, application }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      className="contact_card"
      whileHover={{ scale: 0.97, borderRadius: 0 }}
      key={contact._id}
      onClick={() => {
        dispatch(setCurrentContact(contact));
        dispatch(setCurrentModal("Edit Contact"));
      }}
    >
      <div className="card_content_col">
        <span className="text-lg font-bold">Status</span>
        <span className="font-semibold text-md">{contact.outreachStage}</span>
      </div>

      <div className="card_content_col">
        <span className="text-lg font-bold">{contact.name}</span>
        <span className="font-semibold text-md">{contact.title}</span>
      </div>

      <div className="card_buttons">
        <ApplicationButton application={application} />
      </div>
    </motion.div>
  );
};

export default ContactCard;
