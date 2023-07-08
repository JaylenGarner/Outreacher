"use client";

import { useDispatch, useSelector } from "react-redux";
import { createContact } from "@/redux/reducers/contactSlice";
import handleCreateContact from "../../lib/contact/handleCreateContact";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ContactForm from "./ContactForm";

const CreateContact = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const application = useSelector((state) => state.currentApplicationReducer);

  const handleCreate = async (formData) => {
    const newContact = await handleCreateContact(formData, setError);

    if (newContact) {
      dispatch(createContact(newContact));
      dispatch(clearCurrentModal());
    }
  };

  return (
    <>
      <div className="flex flex_center pt-4">
        <h1 className="modal_header pr-2  max-w-[600px] overflow-hidden text-ellipsis whitespace-nowrap">
          Create Contact for {application.company}
        </h1>
        <motion.button
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="pt-4 hover:text-[#E01D48]"
          onClick={() => dispatch(clearCurrentModal())}
        >
          <FontAwesomeIcon icon={faTrash} />
        </motion.button>
      </div>
      <ContactForm type={"Create"} handleCreate={handleCreate} error={error} />
    </>
  );
};

export default CreateContact;
