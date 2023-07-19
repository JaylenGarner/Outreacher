"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
import { createContact } from "@/redux/reducers/contactSlice";
import handleCreateContact from "../../lib/contact/handleCreateContact";
import ContactForm from "./ContactForm";
import DeleteButton from "../Buttons/DeleteButton";

const CreateContact = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const application = useSelector((state) => state.currentApplication);

  const handleCreate = async (formData) => {
    const newContact = await handleCreateContact(formData, setError);

    if (newContact) {
      dispatch(createContact(newContact));
      dispatch(clearCurrentModal());
    }
  };

  const handleDiscard = async () => {
    dispatch(clearCurrentModal());
  };

  return (
    <>
      <div className="flex flex_center pt-4 space-x-4">
        <h1 className="modal_header">
          Create Contact for {application.company}
        </h1>
        <DeleteButton action={handleDiscard} />
      </div>
      <ContactForm type={"Create"} handleCreate={handleCreate} error={error} />
    </>
  );
};

export default CreateContact;
