"use client";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentFeed } from "@/redux/reducers/structure/currentFeedSlice";
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
        <FontAwesomeIcon
          icon={faRepeat}
          className="sm:hidden fa-xl text-white pt-1"
        />

        <FontAwesomeIcon
          icon={faRepeat}
          className="max-sm:hidden text-white pt-1 fa-2xl"
        />
      </button>
    </HoverScaleMedium>
  );
};

export default SwitchButton;
