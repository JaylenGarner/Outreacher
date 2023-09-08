"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";

const CopyButton = ({ content, handleShowCheck }) => {
  return (
    <HoverScaleMedium>
      <button
        onClick={() => {
          navigator.clipboard.writeText(content);
          handleShowCheck();
        }}
      >
        <FontAwesomeIcon icon={faClone} className="fa-xl" />
      </button>
    </HoverScaleMedium>
  );
};

export default CopyButton;
