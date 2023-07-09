"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
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
        dispatch(setCurrentApplication(contact));
        dispatch(setCurrentModal("Edit Application"));
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
