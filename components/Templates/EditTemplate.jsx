"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { setTemplateFormLoaded } from "@/redux/reducers/templates/templateFormLoadedSlice";
import handleEditTemplate from "../../lib/handlers/template/handleEditTemplate";
import handleDeleteTemplate from "../../lib/handlers/template/handleDeleteTemplate";
import TemplateForm from "./TemplateForm";
import DeleteButton from "../Buttons/DeleteButton";
import { createTemplate } from "@/redux/reducers/templates/templateSlice";
import { deleteTemplate } from "@/redux/reducers/templates/templateSlice";
import ChatoicOrbitRed from "../LoadingSpinners/ChaoticOrbitRed";

const EditTemplate = () => {
  const dispatch = useDispatch();
  const template = useSelector((state) => state.currentTemplate);
  const [error, setError] = useState("");
  const [deletionLoading, setDeletionLoading] = useState(false);

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
    setDeletionLoading(true);
    const response = await handleDeleteTemplate(template.id);

    if (response) {
      dispatch(deleteTemplate(template));
      setDeletionLoading(false);
      dispatch(clearCurrentModal());
    }
  };

  return (
    <>
      <div className="flex flex_center pt-4 space-x-4">
        <h1 className="modal_header">Modify Template</h1>
        {deletionLoading === false ? (
          <DeleteButton action={handleDelete} />
        ) : (
          <ChatoicOrbitRed />
        )}
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
