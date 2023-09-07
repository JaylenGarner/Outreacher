"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
import { createContact, deleteContact } from "@/redux/reducers/contactSlice";
import handleEditContact from "../../lib/handlers/contact/handleEditContact";
import ContactForm from "./ContactForm";
import { clearCurrentContact } from "@/redux/reducers/currentContactSlice";
import { clearCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import { setContactFormLoaded } from "@/redux/reducers/contactFormLoadedSlice";
import DeleteButton from "../Buttons/DeleteButton";
import ApplicationButton from "../Buttons/ApplicationButton";
import TemplateFillButton from "../Buttons/TemplateFillButton";
import handleDeleteContact from "../../lib/handlers/contact/handleDeleteContact";
import ChatoicOrbitRed from "../LoadingSpinners/ChaoticOrbitRed";

const EditContact = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [deletionLoading, setDeletionLoading] = useState(false);
  const application = useSelector((state) => state.currentApplication);
  const contact = useSelector((state) => state.currentContact);

  const handleUpdate = async (formData) => {
    const updatedContact = await handleEditContact(
      formData,
      contact.id,
      setError
    );

    if (updatedContact) {
      dispatch(createContact(updatedContact));
      dispatch(clearCurrentModal());
      dispatch(clearCurrentContact());
      dispatch(clearCurrentApplication());
      dispatch(setContactFormLoaded(false));
    }
  };

  const handleDelete = async () => {
    setDeletionLoading(true);
    const response = await handleDeleteContact(contact.id);

    if (response) {
      dispatch(deleteContact(contact));
      setDeletionLoading(false);
      dispatch(clearCurrentModal());
    }
  };

  return (
    <>
      <div className="flex flex_center pt-4 space-x-4">
        <h1 className="modal_header">Update Contact</h1>
        <ApplicationButton application={application} />
        <TemplateFillButton application={application} contact={contact} />
        {deletionLoading === false ? (
          <DeleteButton action={handleDelete} />
        ) : (
          <ChatoicOrbitRed />
        )}
      </div>
      <div className="flex flex_center pt-2">
        <span className="italic font-semibold  text-xl text-center">
          {application.company}
        </span>
      </div>
      <ContactForm
        type={"Edit"}
        contact={contact}
        handleUpdate={handleUpdate}
        error={error}
      />
    </>
  );
};

export default EditContact;
