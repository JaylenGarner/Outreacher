"use client";

import { useDispatch, useSelector } from "react-redux";
import OutreachCard from "./OutreachCard";
import SwitchButton from "../Buttons/SwitchButton";
import DotSpinnerWhite from "../LoadingSpinners/DotSpinnerWhite";
import getOutreachFeed from "../../lib/helpers/getOutreachFeed";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";

const OutreachFeed = () => {
  const dispatch = useDispatch();
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
        <h2 className="text-4xl font-bold  text-white max-sm:text-3xl">
          Outreach
        </h2>
        <div className=" split_dashboard:hidden">
          <SwitchButton />
        </div>
      </div>

      {!contactsLoaded ? (
        <DotSpinnerWhite />
      ) : contactsLoaded && !outreach.length ? (
        <div className="card text-white text-2xl  text-center">
          <span>
            Start reaching out to contacts to populate your outreach feed, learn
            more about the algorithm{" "}
            <motion.span
              className="font-bold underline"
              whileHover={{ opacity: 0.8 }}
              onClick={() => dispatch(setCurrentModal("Info"))}
            >
              here
            </motion.span>
          </span>
        </div>
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
                  type={"Outreach"}
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
