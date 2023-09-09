"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";
import { useDispatch } from "react-redux";
import { clearCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { Tooltip } from "@nextui-org/tooltip";

const DiscardButton = () => {
  const dispatch = useDispatch();

  return (
    <HoverScaleMedium>
      <Tooltip
        content="Discard"
        className="tooltip"
        placement="top"
        closeDelay={50}
      >
        <button onClick={() => dispatch(clearCurrentModal())}>
          <FontAwesomeIcon
            icon={faX}
            className="fa-lg hover:cursor-pointer hover:text-[#FF0066]"
          />
        </button>
      </Tooltip>
    </HoverScaleMedium>
  );
};

export default DiscardButton;
