"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
import { setTemplateFormLoaded } from "@/redux/reducers/templateFormLoadedSlice";
import handleEditTemplate from "../../lib/handlers/template/handleEditTemplate";
import handleDeleteTemplate from "../../lib/handlers/template/handleDeleteTemplate";
import TemplateForm from "./TemplateForm";
import DeleteButton from "../Buttons/DeleteButton";
import { createTemplate } from "@/redux/reducers/templateSlice";
import { deleteTemplate } from "@/redux/reducers/templateSlice";

const EditTemplate = () => {
  const dispatch = useDispatch();
  const template = useSelector((state) => state.currentTemplate);
  const [error, setError] = useState("");

  const handleUpdate = async (formData) => {
    const updatedTemplate = await handleEditTemplate(
      formData,
      template.id,
      setError
    );

    if (updatedTemplate) {
      dispatch(createTemplate(updatedTemplate));
      dispatch(clearCurrentModal());
      dispatch(setTemplateFormLoaded(false));
    }
  };

  const handleDelete = async () => {
    const response = await handleDeleteTemplate(template.id);

    if (response) {
      dispatch(deleteTemplate(template));
      dispatch(clearCurrentModal());
    }
  };

  return (
    <>
      <div className="flex flex_center pt-4 space-x-4">
        <h1 className="modal_header">Modify Template</h1>
        <DeleteButton action={handleDelete} />
      </div>
      <TemplateForm
        type={"Edit"}
        template={template}
        handleUpdate={handleUpdate}
        error={error}
      />
    </>
  );
};

export default EditTemplate;
