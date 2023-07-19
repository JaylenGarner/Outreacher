"use client";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { setCurrentContact } from "@/redux/reducers/currentContactSlice";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import dayjs from "dayjs";

import { motion } from "framer-motion";

const OutreachCard = ({ contact, className }) => {
  const dispatch = useDispatch();
  const applications = useSelector((state) => state.applications);

  return (
    <motion.div
      className={`${className}`}
      whileHover={{ opacity: 0.8, scale: 0.99 }}
      key={contact._id}
      onClick={() => {
        dispatch(setCurrentContact(contact));
        dispatch(setCurrentApplication(applications[contact.application]));
        dispatch(setCurrentModal("Edit Contact"));
      }}
    >
      <div className="card_content_col">
        <span className="text-xl font-bold">Last Outreach</span>
        <span className="font-semibold text-md">
          {dayjs(contact?.outreachDate).format("MM/DD/YYYY")}
        </span>
      </div>

      <div className="card_content">
        <p className="card_company">{contact.name}</p>
      </div>

      <div className="card_content_col">
        <span className="text-xl font-bold">Status</span>
        <span className="font-semibold text-md">{contact.outreachStage}</span>
      </div>
    </motion.div>
  );
};

export default OutreachCard;
