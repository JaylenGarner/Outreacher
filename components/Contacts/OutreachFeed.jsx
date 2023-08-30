"use client";

import { useSelector } from "react-redux";
import OutreachCard from "./OutreachCard";
import FeedButton from "../Buttons/FeedButton";
import DotSpinnerWhite from "../LoadingSpinners/DotSpinnerWhite";
import getOutreachFeed from "../../lib/helpers/getOutreachFeed";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const OutreachFeed = () => {
  const contacts = useSelector((state) => state.contacts);
  const contactsLoaded = useSelector((state) => state.contactsLoaded);
  const [outreach, setOutreach] = useState([]);

  useEffect(() => {
    const updateFeed = async () => {
      const updatedFeed = await getOutreachFeed(contacts);
      setOutreach(updatedFeed);
    };
    updateFeed();
  }, [contacts]);

  return (
    <div className="flex flex-col items-center overflow-y-scroll w-full no-scrollbar">
      <div className="flex flex_center m-8 space-x-4">
        <h2 className="text-4xl font-bold text-white">Outreach</h2>
        <div className=" split_dashboard:hidden">
          <FeedButton />
        </div>
      </div>

      {!contactsLoaded ? (
        <DotSpinnerWhite />
      ) : contactsLoaded && !outreach.length ? (
        <span className="text-white text-2xl card text-center">
          Start reaching out to contacts to populate your outreach feed, learn
          more about the algorithm here.
        </span>
      ) : (
        <motion.div
          className="overflow-y-scroll overflow-x-hidden no-scrollbar"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 35, damping: 14 }}
        >
          {outreach &&
            outreach.map((contact) => {
              return (
                <OutreachCard
                  key={contact.id}
                  contact={contact}
                  className={"application_card"}
                />
              );
            })}
        </motion.div>
      )}
    </div>
  );
};

export default OutreachFeed;
