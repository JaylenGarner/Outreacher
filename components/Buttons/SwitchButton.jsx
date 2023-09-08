"use client";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentFeed } from "@/redux/reducers/currentFeedSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import HoverScaleMedium from "../Animations/HoverScaleMedium";

const SwitchButton = () => {
  const dispatch = useDispatch();
  const currentFeed = useSelector((state) => state.currentFeed);

  return (
    <HoverScaleMedium>
      <button
        onClick={(e) => {
          e.stopPropagation();
          let value = currentFeed === "outreach" ? "applications" : "outreach";
          dispatch(setCurrentFeed(value));
        }}
      >
        <FontAwesomeIcon icon={faRepeat} className="fa-2xl text-white pt-1" />
      </button>
    </HoverScaleMedium>
  );
};

export default SwitchButton;
