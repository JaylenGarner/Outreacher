"use client";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { motion } from "framer-motion";
import ApplicationCard from "./ApplicationCard";
import CreateApplicationButton from "../Buttons/CreateApplicationButton";

const ApplicationsFeed = () => {
  const applications = useSelector((state) => state.applicationReducer);

  return (
    <div className="flex flex-col overflow-y-scroll w-full items-center">
      <div className="flex flex_center">
        <h2 className="text-4xl font-bold m-4 text-white">Applications</h2>
        <CreateApplicationButton />
      </div>

      <motion.div
        className="overflow-y-scroll overflow-x-hidden w-4/6"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 35, damping: 14 }}
      >
        {applications &&
          Object.values(applications).map((application) => {
            return (
              <ApplicationCard
                key={application._id}
                application={application}
              />
            );
          })}
      </motion.div>
    </div>
  );
};

export default ApplicationsFeed;
