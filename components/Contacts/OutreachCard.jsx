"use client";

import { useDispatch, useSelector } from "react-redux";
import ApplicationButton from "../Buttons/ApplicationButton";
import { setCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { setCurrentContact } from "@/redux/reducers/currentContactSlice";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";

import { motion } from "framer-motion";

const OutreachCard = ({ contact }) => {
  const dispatch = useDispatch();
  const applications = useSelector((state) => state.applicationReducer);

  return (
    <motion.div
      className="application_card"
      whileHover={{ opacity: 0.8, scale: 0.99 }}
      key={contact._id}
      onClick={() => {
        dispatch(setCurrentContact(contact));
        dispatch(setCurrentApplication(applications[contact.application]));
        dispatch(setCurrentModal("Edit Contact"));
      }}
    >
      <div className="card_content_col">
        <span className="text-xl font-bold">Status</span>
        <span className="font-semibold text-md">{contact.outreachStage}</span>
      </div>

      <div className="card_content">
        <p className="card_company">{contact.name}</p>
      </div>

      <div className="card_buttons">
        <ApplicationButton application={applications[contact.application]} />
      </div>
    </motion.div>
  );
};

export default OutreachCard;
