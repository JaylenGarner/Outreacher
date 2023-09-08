"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";
import { setCurrentContact } from "@/redux/reducers/currentContactSlice";

const TemplateFillButton = ({ contact, application }) => {
  const dispatch = useDispatch();

  return (
    <HoverScaleMedium>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setCurrentApplication(application));
          dispatch(setCurrentContact(contact));
          dispatch(setCurrentModal("Template List (Fill)"));
        }}
      >
        <FontAwesomeIcon icon={faPaperPlane} className="fa-xl" />
      </button>
    </HoverScaleMedium>
  );
};

export default TemplateFillButton;
