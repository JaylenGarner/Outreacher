"use client";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ApplicationCard from "./ApplicationCard";
import FeedButton from "../Buttons/FeedButton";
import CreateApplicationButton from "../Buttons/CreateApplicationButton";

const ApplicationsFeed = () => {
  const applications = useSelector((state) => state.applications);
  const sortByUpdatedAtDesc = (a, b) =>
    new Date(b.updatedAt) - new Date(a.updatedAt);

  return (
    <div className="flex flex-col overflow-y-scroll w-full items-center no-scrollbar">
      <div className="flex flex_center m-8 space-x-4">
        <h2 className="text-4xl font-bold  text-white">Applications</h2>
        <div className=" lg:hidden">
          <FeedButton />
        </div>
        <CreateApplicationButton />
      </div>

      <motion.div
        className="overflow-y-scroll overflow-x-hidden w-4/6 no-scrollbar"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 35, damping: 14 }}
      >
        {applications &&
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
    </div>
  );
};

export default ApplicationsFeed;
