"use client";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import CreateContactButton from "../Buttons/CreateContactButton";
import OutreachCard from "./OutreachCard";

const ContactList = () => {
  const application = useSelector((state) => state.currentApplication);
  const contacts = useSelector((state) => state.contacts);

  return (
    <div className="flex flex-col flex_center overflow-y-scroll w-full h-[500px] no-scrollbar">
      <div className="flex flex_center space-x-4 m-4">
        <h2 className="modal_header">Contacts for {application.company}</h2>
        <CreateContactButton application={application} />
      </div>

      <motion.div
        className="overflow-y-scroll overflow-x-hidden no-scrollbar pr-10 pl-10 pb-4"
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
                  className={"contact_card"}
                />
              );
            }
          })}
      </motion.div>
    </div>
  );
};

export default ContactList;
