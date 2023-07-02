"use client";

import { useSelector, useDispatch } from "react-redux";
// import { setCurrentApplication } from "@/redux/reducers/currentApplication";
import { setCurrentModal } from "@/redux/reducers/currentModal";
import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

import ApplicationCard from "./ApplicationCard";

const Applications = () => {
  const dispatch = useDispatch();
  const applications = useSelector((state) => state.applicationReducer);

  return (
    <div className="flex flex-col flex_center overflow-y-scroll w-full">
      <div className="flex ">
        <h2 className="text-2xl font-bold m-4 text-white">Applications</h2>
        <motion.button
          onClick={() => {
            dispatch(setCurrentModal("Create Application"));
          }}
          className="text-3xl text-white pb-1"
          whileTap={{ scale: 0.8 }}
          whileHover={{
            scale: 1.1,
            opacity: 0.9,
          }}
        >
          +
        </motion.button>
      </div>

      <motion.div
        className="overflow-y-scroll overflow-x-hidden w-4/6"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 35, damping: 14 }}
      >
        {applications &&
          Object.values(applications).map((application) => {
            return <ApplicationCard application={application} />;
          })}
      </motion.div>
    </div>
  );
};

export default Applications;
