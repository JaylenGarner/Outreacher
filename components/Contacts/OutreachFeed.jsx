"use client";

import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import OutreachCard from "./OutreachCard";

const OutreachFeed = () => {
  const contacts = useSelector((state) => state.contactReducer);

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
        {contacts &&
          Object.values(contacts).map((contact) => {
            return <OutreachCard contact={contact} />;
          })}
      </motion.div>
    </div>
  );
};

export default OutreachFeed;
