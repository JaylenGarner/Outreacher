"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/applications/currentApplicationSlice";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { motion } from "framer-motion";
import CreateContactButton from "../Buttons/CreateContactButton";
import ContactListButton from "../Buttons/ContactListButton";
import getEmoji from "../../lib/helpers/getEmoji";

const ApplicationCard = ({ application }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      className="application_card"
      whileHover={{ opacity: 0.8, scale: 0.99 }}
      key={application.id}
      onClick={() => {
        dispatch(setCurrentApplication(application));
        dispatch(setCurrentModal("Edit Application"));
      }}
    >
      <div className="card_buttons">
        <CreateContactButton application={application} />
        <ContactListButton application={application} />
      </div>

      <div className="card_content">
        <p className="card_company">{application.company}</p>
      </div>

      <div className="card_content_col">
        <span className="text-xl font-bold">Status</span>
        <span className="font-semibold text-md">
          {application.status} {getEmoji(application.status)}
        </span>
      </div>
    </motion.div>
  );
};

export default ApplicationCard;
