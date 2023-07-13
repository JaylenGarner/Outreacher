"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "@/redux/reducers/contactSlice";
import { motion } from "framer-motion";
import CreateContactButton from "../Buttons/CreateContactButton";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.currentApplicationReducer);
  const contacts = useSelector((state) => state.contactReducer);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/applications/${application._id}/contacts`
      );
      const data = await response.json();
      dispatch(getContacts(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="flex flex-col flex_center overflow-y-scroll w-full h-[500px]">
      <div className="flex flex_center ">
        <h2 className="text-2xl font-bold m-4">
          Contacts for {application.company}
        </h2>
        <CreateContactButton application={application} />
      </div>

      <motion.div
        className="overflow-y-scroll overflow-x-hidden w-4/6 h-5/6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {contacts &&
          Object.values(contacts).map((contact) => {
            if (contact?.application === application?._id) {
              return (
                <ContactCard
                  key={contact._id}
                  contact={contact}
                  application={application}
                />
              );
            }
          })}
      </motion.div>
    </div>
  );
};

export default ContactList;
