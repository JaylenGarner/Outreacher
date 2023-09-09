"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/applications/currentApplicationSlice";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HoverScaleMedium from "../Animations/HoverScaleMedium";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@nextui-org/tooltip";

const ApplicationButton = ({ application }) => {
  const dispatch = useDispatch();

  return (
    <HoverScaleMedium>
      <Tooltip
        content="View Application"
        className="tooltip"
        placement="top"
        closeDelay={50}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setCurrentApplication(application));
            dispatch(setCurrentModal("Edit Application"));
          }}
        >
          <FontAwesomeIcon icon={faFile} className="fa-xl" />
        </button>
      </Tooltip>
    </HoverScaleMedium>
  );
};

export default ApplicationButton;
