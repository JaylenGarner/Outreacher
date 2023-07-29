"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
import { createContact, deleteContact } from "@/redux/reducers/contactSlice";
import handleEditContact from "../../lib/contact/handleEditContact";
import ContactForm from "./ContactForm";
import { clearCurrentContact } from "@/redux/reducers/currentContactSlice";
import { clearCurrentApplication } from "@/redux/reducers/currentApplicationSlice";
import DeleteButton from "../Buttons/DeleteButton";
import ApplicationButton from "../Buttons/ApplicationButton";
import handleDeleteContact from "../../lib/contact/handleDeleteContact";

const EditContact = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
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
    }
  };

  const handleDelete = async () => {
    const response = await handleDeleteContact(contact.id);

    if (response) {
      dispatch(deleteContact(contact));
      dispatch(clearCurrentModal());
    }
  };

  return (
    <>
      <div className="flex flex_center pt-4 space-x-4">
        <h1 className="modal_header">Contact for {application.company}</h1>
        <ApplicationButton application={application} />
        <DeleteButton action={handleDelete} />
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
