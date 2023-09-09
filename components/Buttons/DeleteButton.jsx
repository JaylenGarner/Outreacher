"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";
import { Tooltip } from "@nextui-org/tooltip";

const DeleteButton = ({ action }) => {
  return (
    <HoverScaleMedium>
      <Tooltip
        content="Delete"
        className="tooltip"
        placement="top"
        closeDelay={50}
      >
        <button className="focus:outline-none" onClick={() => action()}>
          <FontAwesomeIcon
            icon={faTrash}
            className="fa-xl hover:cursor-pointer hover:text-[#FF0066]"
          />
        </button>
      </Tooltip>
    </HoverScaleMedium>
  );
};

export default DeleteButton;
