"use client";

import { useDispatch } from "react-redux";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/tooltip";

const CreateTemplateButton = () => {
  const dispatch = useDispatch();

  return (
    <Tooltip
      content={"Create Template"}
      className="tooltip"
      placement="top"
      closeDelay={50}
    >
      <motion.div
        whileHover={{ scale: 1.2, opacity: 0.8 }}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setCurrentModal("Create Template"));
        }}
        className="hover:cursor-pointer"
      >
        <FontAwesomeIcon icon={faCirclePlus} className="fa-xl text-black" />
      </motion.div>
    </Tooltip>
  );
};

export default CreateTemplateButton;
