"use client";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentFeed } from "@/redux/reducers/currentFeedSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const FeedButton = () => {
  const dispatch = useDispatch();
  const currentFeed = useSelector((state) => state.currentFeed);

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.5 }}
      onClick={(e) => {
        e.stopPropagation();
        let value = currentFeed === "outreach" ? "applications" : "outreach";
        dispatch(setCurrentFeed(value));
      }}
      className="hover:cursor-pointer"
    >
      <FontAwesomeIcon icon={faRepeat} className="fa-2xl text-white" />
    </motion.div>
  );
};

export default FeedButton;
