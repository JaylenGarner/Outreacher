"use client";

import { setCurrentModal } from "@/redux/reducers/currentModal";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import ApplicationModal from "./ApplicationModal";
import ApplicationFormModal from "./ApplicationFormModal";

const Backdrop = () => {
  const dispatch = useDispatch();
  const currentModal = useSelector((state) => state.currentModalReducer);

  const handleClick = () => {
    if (currentModal === "Create Application") return;
    dispatch(setCurrentModal(null));
  };

  return (
    <motion.div className="backdrop" onClick={handleClick}>
      {currentModal === "Application" && <ApplicationModal />}
      {currentModal === "Create Application" && <ApplicationFormModal />}
    </motion.div>
  );
};

export default Backdrop;
