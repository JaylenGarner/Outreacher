"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";

const DiscardButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.3 }}
        onClick={() => dispatch(clearCurrentModal())}
      >
        <FontAwesomeIcon
          icon={faX}
          className="fa-lg hover:cursor-pointer hover:text-[#FF0066]"
        />
      </motion.button>
    </>
  );
};

export default DiscardButton;
