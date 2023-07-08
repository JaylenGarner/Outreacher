"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createApplication } from "@/redux/reducers/applicationSlice";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
import handleCreateApplication from "../../lib/application/handleCreateApplication";
import ApplicationForm from "./ApplicationForm";
import DeleteButton from "../Buttons/DeleteButton";

const CreateApplication = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleCreate = async (formData) => {
    const newApplication = await handleCreateApplication(formData, setError);

    if (newApplication) {
      dispatch(createApplication(newApplication));
      dispatch(clearCurrentModal());
    }
  };

  const handleDiscard = () => {
    dispatch(clearCurrentModal());
  };

  return (
    <>
      <div className="flex flex_center pt-4">
        <h1 className="modal_header pr-4">Log Application</h1>
        <DeleteButton action={handleDiscard} />
      </div>
      <ApplicationForm
        type={"Create"}
        handleCreate={handleCreate}
        error={error}
      />
    </>
  );
};

export default CreateApplication;
