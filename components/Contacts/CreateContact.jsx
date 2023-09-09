"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { createContact } from "@/redux/reducers/contacts/contactSlice";
import { setContactFormLoaded } from "@/redux/reducers/contacts/contactFormLoadedSlice";
import handleCreateContact from "../../lib/handlers/contact/handleCreateContact";
import ContactForm from "./ContactForm";
import DiscardButton from "../Buttons/DiscardButton";
import { setCurrentContact } from "@/redux/reducers/contacts/currentContactSlice";
import { setCurrentApplication } from "@/redux/reducers/applications/currentApplicationSlice";
import { setContactIsNew } from "@/redux/reducers/contacts/contactIsNewSlice";

const CreateContact = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const application = useSelector((state) => state.currentApplication);

  const handleCreate = async (formData) => {
    setError("");
    const newContact = await handleCreateContact(formData, setError);

    if (newContact) {
      dispatch(createContact(newContact));
      dispatch(setCurrentApplication(application));
      dispatch(setCurrentContact(newContact));
      dispatch(setContactFormLoaded(false));
      dispatch(setContactIsNew(true));
      dispatch(setCurrentModal("Template List (Fill)"));
    }
    dispatch(setContactFormLoaded(false));
  };

  return (
    <>
      <div className="flex flex_center pt-4 space-x-4">
        <h1 className="modal_header">Create Contact</h1>
        <DiscardButton />
      </div>
      <div className="flex flex_center pt-2">
        <span className="italic font-semibold  text-xl text-center">
          {application.company}
        </span>
      </div>
      <ContactForm type={"Create"} handleCreate={handleCreate} error={error} />
    </>
  );
};

export default CreateContact;
