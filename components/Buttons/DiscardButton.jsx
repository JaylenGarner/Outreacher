"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";
import { useDispatch } from "react-redux";
import { clearCurrentModal } from "@/redux/reducers/structure/currentModalSlice";

const DiscardButton = () => {
  const dispatch = useDispatch();

  return (
    <HoverScaleMedium>
      <button onClick={() => dispatch(clearCurrentModal())}>
        <FontAwesomeIcon
          icon={faX}
          className="fa-lg hover:cursor-pointer hover:text-[#FF0066]"
        />
      </button>
    </HoverScaleMedium>
  );
};

export default DiscardButton;
