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
        className="bg-slate-800 text-slate-100 pt-1 pb-1 pr-3 pl-3 rounded-lg"
        placement="top"
        closeDelay={50}
      >
        <button
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
