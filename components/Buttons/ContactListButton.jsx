"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/applications/currentApplicationSlice";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";

const ContactListButton = ({ application }) => {
  const dispatch = useDispatch();

  return (
    <HoverScaleMedium>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setCurrentApplication(application));
          dispatch(setCurrentModal("Contact List"));
        }}
      >
        <FontAwesomeIcon icon={faAddressBook} className="fa-xl" />
      </button>
    </HoverScaleMedium>
  );
};

export default ContactListButton;
