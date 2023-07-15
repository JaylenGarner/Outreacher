"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ApplicationButton = ({ application }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      transition={{ duration: 0.5 }}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setCurrentApplication(application));
        dispatch(setCurrentModal("Edit Application"));
      }}
    >
      <FontAwesomeIcon
        icon={faFile}
        className="fa-xl cursor-pointer"
        data-tooltip-id="application-tooltip"
        data-tooltip-content="View Application"
      />
    </motion.div>
  );
};

export default ApplicationButton;
