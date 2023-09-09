"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/applications/currentApplicationSlice";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";
import { setCurrentContact } from "@/redux/reducers/contacts/currentContactSlice";
import { Tooltip } from "@nextui-org/tooltip";

const TemplateFillButton = ({ contact, application }) => {
  const dispatch = useDispatch();

  return (
    <HoverScaleMedium>
      <Tooltip
        content="Fill a Template"
        className="tooltip"
        placement="top"
        closeDelay={50}
      >
        <button
          className="focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setCurrentApplication(application));
            dispatch(setCurrentContact(contact));
            dispatch(setCurrentModal("Template List (Fill)"));
          }}
        >
          <FontAwesomeIcon icon={faPaperPlane} className="fa-xl" />
        </button>
      </Tooltip>
    </HoverScaleMedium>
  );
};

export default TemplateFillButton;
