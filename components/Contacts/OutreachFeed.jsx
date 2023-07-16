"use client";

import { useSelector } from "react-redux";
import OutreachCard from "./OutreachCard";
import getOutreachFeed from "../../lib/contact/getOutreachFeed";
import { motion } from "framer-motion";

const OutreachFeed = () => {
  const contacts = useSelector((state) => state.contacts);
  const outreach = getOutreachFeed(contacts);

  return (
    <div className="flex flex-col items-center overflow-y-scroll w-full">
      <div className="flex flex_center">
        <h2 className="text-4xl font-bold m-4 text-white">Outreach</h2>
      </div>

      <motion.div
        className="overflow-y-scroll overflow-x-hidden w-4/6"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 35, damping: 14 }}
      >
        {outreach &&
          outreach.map((contact) => {
            return <OutreachCard key={contact._id} contact={contact} />;
          })}
      </motion.div>
    </div>
  );
};

export default OutreachFeed;
