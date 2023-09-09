"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTemplate } from "@/redux/reducers/templates/templateSlice";
import { setTemplateFormLoaded } from "@/redux/reducers/templates/templateFormLoadedSlice";
import { clearCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import handleCreateTemplate from "../../lib/handlers/template/handleCreateTemplate";
import TemplateForm from "./TemplateForm";
import DiscardButton from "../Buttons/DiscardButton";

const CreateTemplate = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleCreate = async (formData) => {
    setError("");
    const newTemplate = await handleCreateTemplate(formData, setError);

    if (newTemplate) {
      dispatch(createTemplate(newTemplate));
      dispatch(clearCurrentModal());
    }
    dispatch(setTemplateFormLoaded(false));
  };

  return (
    <>
      <div className="flex flex_center pt-4">
        <h1 className="modal_header pr-4">Create Template</h1>
        <DiscardButton />
      </div>
      <TemplateForm type={"Create"} handleCreate={handleCreate} error={error} />
    </>
  );
};

export default CreateTemplate;
