"use client";

import { useDispatch } from "react-redux";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const CreateButton = ({ type, color }) => {
  const dispatch = useDispatch();
  let modalType =
    type === "Application" ? "Create Application" : "Create Template";

  return (
    <motion.div
      whileHover={{ scale: 1.2, opacity: 0.8 }}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setCurrentModal(modalType));
      }}
      className="hover:cursor-pointer"
    >
      <FontAwesomeIcon
        icon={faCirclePlus}
        className={` max-sm:hidden ${
          type === "Application" ? "fa-2xl" : "fa-xl"
        } ${color === "black" ? "text-black" : "text-white"}`}
      />

      {/* Resizing for mobile application feed */}
      <FontAwesomeIcon
        icon={faCirclePlus}
        className={`sm:hidden fa-xl ${
          color === "black" ? "text-black" : "text-white"
        }`}
      />
    </motion.div>
  );
};

export default CreateButton;
