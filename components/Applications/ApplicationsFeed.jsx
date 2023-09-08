"use client";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ApplicationCard from "./ApplicationCard";
import CreateButton from "../Buttons/CreateButton";
import SwitchButton from "../Buttons/SwitchButton";
import DotSpinnerWhite from "../LoadingSpinners/DotSpinnerWhite";

const ApplicationsFeed = () => {
  const applications = useSelector((state) => state.applications);
  const applicationsLoaded = useSelector((state) => state.applicationsLoaded);
  const sortByUpdatedAtDesc = (a, b) =>
    new Date(b.updatedAt) - new Date(a.updatedAt);

  return (
    <div className="flex flex-col overflow-y-scroll items-center no-scrollbar">
      <div className="flex flex_center m-8 space-x-4">
        <h2 className="text-4xl font-bold  text-white">Applications</h2>
        <div className=" split_dashboard:hidden">
          <SwitchButton />
        </div>
        <div className="pt-1">
          <CreateButton type="Application" color="white" />
        </div>
      </div>

      {!applicationsLoaded ? (
        <DotSpinnerWhite />
      ) : applicationsLoaded && !Object.values(applications).length ? (
        <span className="text-white text-2xl card text-center">
          Here's to a fresh start. Let's start shaping a better future, one
          opportunity at a time.
        </span>
      ) : (
        <motion.div
          className="overflow-y-scroll overflow-x-hidden no-scrollbar"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 35, damping: 14 }}
        >
          {applications &&
            applicationsLoaded &&
            Object.values(applications)
              .slice()
              .sort(sortByUpdatedAtDesc)
              .map((application) => {
                return (
                  <ApplicationCard
                    key={application.id}
                    application={application}
                  />
                );
              })}
        </motion.div>
      )}
    </div>
  );
};

export default ApplicationsFeed;
