"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HoverScaleMedium from "../Animations/HoverScaleMedium";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ApplicationButton = ({ application }) => {
  const dispatch = useDispatch();

  return (
    <HoverScaleMedium>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setCurrentApplication(application));
          dispatch(setCurrentModal("Edit Application"));
        }}
      >
        <FontAwesomeIcon icon={faFile} className="fa-xl" />
      </button>
    </HoverScaleMedium>
  );
};

export default ApplicationButton;
