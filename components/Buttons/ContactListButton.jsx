"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/applications/currentApplicationSlice";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";
import { Tooltip } from "@nextui-org/tooltip";

const ContactListButton = ({ application }) => {
  const dispatch = useDispatch();

  return (
    <HoverScaleMedium>
      <Tooltip
        content="View Contact List"
        className="bg-slate-800 text-slate-100 pt-1 pb-1 pr-3 pl-3 rounded-lg focus:border-none"
        placement="top"
        closeDelay={50}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setCurrentApplication(application));
            dispatch(setCurrentModal("Contact List"));
          }}
        >
          <FontAwesomeIcon icon={faAddressBook} className="fa-xl" />
        </button>
      </Tooltip>
    </HoverScaleMedium>
  );
};

export default ContactListButton;
