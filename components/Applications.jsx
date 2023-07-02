"use client";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/redux/reducers/currentApplication";
import { setCurrentModal } from "@/redux/reducers/currentModal";
import { motion } from "framer-motion";

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
          whileTap={{ scale: 0.7 }}
          whileHover={{ scale: 1.1, opacity: 0.9 }}
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
            const applicationId = application._id;

            return (
              <motion.div
                whileHover={{ opacity: 0.8, scale: 0.99 }}
                whileTap={{ scale: 0.8 }}
                key={applicationId}
                onClick={() => {
                  dispatch(setCurrentApplication(applications[applicationId]));
                  dispatch(setCurrentModal("Application"));
                }}
                className="h-1/6 p-2 flex flex-col mb-2 rounded-xl bg-white cursor-pointer flex_center"
              >
                <h2 className="font-bold text-xl">{application.company}</h2>
                <span className="text-lg">{application.position}</span>
                <span>{application.status}</span>
              </motion.div>
            );
          })}
      </motion.div>
    </div>
  );
};

export default Applications;
