"use client";

import { useDispatch } from "react-redux";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/tooltip";

const CreateApplicationButton = () => {
  const dispatch = useDispatch();

  return (
    <Tooltip
      content={"Create Application"}
      className="tooltip"
      placement="top"
      closeDelay={50}
    >
      <motion.div
        whileHover={{ scale: 1.2, opacity: 0.8 }}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setCurrentModal("Create Application"));
        }}
        className="hover:cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faCirclePlus}
          className={` max-sm:hidden fa-2xl text-white`}
        />

        {/* Resizing for mobile application feed */}
        <FontAwesomeIcon
          icon={faCirclePlus}
          className={"sm:hidden fa-xl text-white"}
        />
      </motion.div>
    </Tooltip>
  );
};

export default CreateApplicationButton;
