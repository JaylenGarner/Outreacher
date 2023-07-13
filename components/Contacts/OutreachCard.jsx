"use client";

import { useDispatch, useSelector } from "react-redux";
import ApplicationButton from "../Buttons/ApplicationButton";

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
        // dispatch(setCurrentApplication(contact));
        // dispatch(setCurrentModal("Edit Application"));
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
