"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTemplate } from "@/redux/reducers/templateSlice";
import { setTemplateFormLoaded } from "@/redux/reducers/templateFormLoaded";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
import handleCreateTemplate from "../../lib/handlers/template/handleCreateTemplate";
import TemplateForm from "./TemplateForm";
import DeleteButton from "../Buttons/DeleteButton";

const CreateTemplate = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleCreate = async (formData) => {
    const newTemplate = await handleCreateTemplate(formData, setError);

    if (newTemplate) {
      dispatch(createTemplate(newTemplate));
      dispatch(clearCurrentModal());
      dispatch(setTemplateFormLoaded(false));
    }
  };

  const handleDiscard = () => {
    dispatch(clearCurrentModal());
  };

  return (
    <>
      <div className="flex flex_center pt-4">
        <h1 className="modal_header pr-4">Create Template</h1>
        <DeleteButton action={handleDiscard} />
      </div>
      <TemplateForm type={"Create"} handleCreate={handleCreate} error={error} />
    </>
  );
};

export default CreateTemplate;
