"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
import { createApplication } from "@/redux/reducers/applicationSlice";
import { deleteApplication } from "@/redux/reducers/applicationSlice";
import { setApplicationFormLoaded } from "@/redux/reducers/applicationFormLoadedSlice";
import handleEditApplication from "../../lib/handlers/application/handleEditApplication";
import handleDeleteApplication from "../../lib/handlers/application/handleDeleteApplication";
import ApplicationForm from "./ApplicationForm";
import CreateContactButton from "../Buttons/CreateContactButton";
import ContactListButton from "../Buttons/ContactListButton";
import { cascadeDeleteContacts } from "@/redux/reducers/contactSlice";
import DeleteButton from "../Buttons/DeleteButton";

const EditApplication = () => {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.currentApplication);
  const [error, setError] = useState("");

  const handleUpdate = async (formData) => {
    const updatedApplication = await handleEditApplication(
      formData,
      application.id,
      setError
    );

    if (updatedApplication) {
      dispatch(createApplication(updatedApplication));
      dispatch(clearCurrentModal());
      dispatch(setApplicationFormLoaded(false));
    }
  };

  const handleDelete = async () => {
    const response = await handleDeleteApplication(application.id);

    if (response) {
      dispatch(deleteApplication(application));
      dispatch(cascadeDeleteContacts(application.id));
      dispatch(clearCurrentModal());
    }
  };

  return (
    <>
      <div className="flex flex_center pt-4 space-x-4">
        <h1 className="modal_header">Update Application</h1>
        <CreateContactButton application={application} />
        <ContactListButton application={application} />
        <DeleteButton action={handleDelete} />
      </div>
      <ApplicationForm
        type={"Edit"}
        application={application}
        handleUpdate={handleUpdate}
        error={error}
      />
    </>
  );
};

export default EditApplication;
