"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";

const DeleteButton = ({ action }) => {
  return (
    <HoverScaleMedium>
      <button onClick={() => action()}>
        <FontAwesomeIcon
          icon={faTrash}
          className="fa-xl hover:cursor-pointer hover:text-[#FF0066]"
        />
      </button>
    </HoverScaleMedium>
  );
};

export default DeleteButton;
