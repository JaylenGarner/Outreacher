"use client";

import { setCurrentModal } from "@/redux/reducers/currentModal";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import ApplicationModal from "./ApplicationModal";

const Backdrop = () => {
  const dispatch = useDispatch();
  const currentModal = useSelector((state) => state.currentModalReducer);

  return (
    <motion.div
      className="absolute h-screen w-full flex flex_center bg-black bg-opacity-50 z-10"
      onClick={() => {
        dispatch(setCurrentModal(null));
      }}
    >
      {currentModal === "Application" && <ApplicationModal />}
    </motion.div>
  );
};

export default Backdrop;
