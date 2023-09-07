"use client";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import CreateContactButton from "../Buttons/CreateContactButton";
import OutreachCard from "./OutreachCard";

const ContactList = () => {
  const application = useSelector((state) => state.currentApplication);
  const contacts = useSelector((state) => state.contacts);

  return (
    <div className="flex flex-col overflow-y-scroll h-[500px] no-scrollbar">
      <div className="flex flex_center pt-4 space-x-4">
        <h2 className="modal_header">Contact List</h2>
        <CreateContactButton application={application} />
      </div>
      <div className="flex flex_center pt-2">
        <span className="italic font-semibold  text-xl text-center pb-4">
          {application.company}
        </span>
      </div>

      <motion.div
        className="overflow-y-scroll overflow-x-hidden no-scrollbar pr-6 pl-6 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {contacts &&
          Object.values(contacts).map((contact) => {
            if (contact?.applicationId === application?.id) {
              return (
                <OutreachCard
                  key={contact.id}
                  contact={contact}
                  type={"Contact"}
                  className={"contact_card"}
                />
              );
            }
          })}
        <div className="placeholder"></div>
      </motion.div>
    </div>
  );
};

export default ContactList;
