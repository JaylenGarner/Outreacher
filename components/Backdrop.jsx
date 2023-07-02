"use client";

import { setCurrentModal } from "@/redux/reducers/currentModal";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
// import ApplicationFormModal from "./ApplicationFormModal";
import CreateApplication from "./CreateApplication";
import EditApplication from "./EditApplication";

const Backdrop = () => {
  const dispatch = useDispatch();
  const currentModal = useSelector((state) => state.currentModalReducer);

  const handleClick = () => {
    if (currentModal === "Create Application") return;
    dispatch(setCurrentModal(null));
  };

  return (
    <motion.div className="backdrop" onClick={handleClick}>
      {currentModal === "Edit Application" && <EditApplication />}
      {currentModal === "Create Application" && <CreateApplication />}
    </motion.div>
  );
};

export default Backdrop;
