"use client";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/currentApplication";
import currentModal, { setCurrentModal } from "@/redux/reducers/currentModal";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import getEmoji from "../../lib/application/getEmoji";

const ApplicationCard = ({ application }) => {
  const dispatch = useDispatch();
  const applications = useSelector((state) => state.applicationReducer);
  const applicationId = application._id;

  return (
    <motion.div
      className="app_card"
      whileHover={{ opacity: 0.8, scale: 0.99 }}
      key={applicationId}
      onClick={() => {
        dispatch(setCurrentApplication(applications[applicationId]));
        dispatch(setCurrentModal("Edit Application"));
      }}
    >
      <motion.div
        whileHover={{ scale: 1.3 }}
        transition={{ duration: 0.5 }}
        className="w-1/3"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setCurrentApplication(applications[applicationId]));
          dispatch(setCurrentModal("Create Contact"));
        }}
      >
        <FontAwesomeIcon icon={faUserPlus} className="fa-xl w-full" />
      </motion.div>

      <div className="app_card_company_div">
        <p className="app_card_company">{application.company}</p>
      </div>

      <div className="app_card_activity_div">
        <span className="text-xl font-bold">Status</span>
        <span className="font-semibold text-md">
          {application.status} {getEmoji(application.status)}
        </span>
      </div>
    </motion.div>
  );
};

export default ApplicationCard;