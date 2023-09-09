"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";
import { Tooltip } from "@nextui-org/tooltip";

const CopyButton = ({ content, handleShowCheck }) => {
  return (
    <HoverScaleMedium>
      <Tooltip
        content="Copy Template"
        className="tooltip"
        placement="top"
        closeDelay={50}
      >
        <button
          className="focus:outline-none"
          onClick={() => {
            navigator.clipboard.writeText(content);
            handleShowCheck();
          }}
        >
          <FontAwesomeIcon icon={faClone} className="fa-xl" />
        </button>
      </Tooltip>
    </HoverScaleMedium>
  );
};

export default CopyButton;
