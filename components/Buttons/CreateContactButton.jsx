"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/applications/currentApplicationSlice";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";
import { Tooltip } from "@nextui-org/tooltip";

const CreateContactButton = ({ application }) => {
  const dispatch = useDispatch();

  return (
    <HoverScaleMedium>
      <Tooltip
        content="Create Contact"
        className="bg-slate-800 text-slate-100 pt-1 pb-1 pr-3 pl-3 rounded-lg"
        placement="top"
        closeDelay={50}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setCurrentApplication(application));
            dispatch(setCurrentModal("Create Contact"));
          }}
        >
          <FontAwesomeIcon
            icon={faUserPlus}
            className="fa-xl hover:cursor-pointer"
          />
        </button>
      </Tooltip>
    </HoverScaleMedium>
  );
};

export default CreateContactButton;
