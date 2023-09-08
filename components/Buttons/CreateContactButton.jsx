"use client";

import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";

const CreateContactButton = ({ application }) => {
  const dispatch = useDispatch();

  return (
    <HoverScaleMedium>
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
    </HoverScaleMedium>
  );
};

export default CreateContactButton;
