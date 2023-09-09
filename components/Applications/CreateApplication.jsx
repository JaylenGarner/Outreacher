"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createApplication } from "@/redux/reducers/applications/applicationSlice";
import { setApplicationFormLoaded } from "@/redux/reducers/applications/applicationFormLoadedSlice";
import { clearCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import handleCreateApplication from "../../lib/handlers/application/handleCreateApplication";
import ApplicationForm from "./ApplicationForm";
import DiscardButton from "../Buttons/DiscardButton";

const CreateApplication = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleCreate = async (formData) => {
    setError("");
    const newApplication = await handleCreateApplication(formData, setError);

    if (newApplication) {
      dispatch(createApplication(newApplication));
      dispatch(clearCurrentModal());
    }
    dispatch(setApplicationFormLoaded(false));
  };

  return (
    <>
      <div className="flex flex_center pt-4">
        <h1 className="modal_header pr-4">Log Application</h1>
        <DiscardButton />
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
