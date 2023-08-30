"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
// import { createApplication } from "@/redux/reducers/applicationSlice";
// import { deleteApplication } from "@/redux/reducers/applicationSlice";
// import { setApplicationFormLoaded } from "@/redux/reducers/applicationFormLoadedSlice";
import handleEditTemplate from "../../lib/handlers/template/handleEditTemplate";
import TemplateForm from "./TemplateForm";
import DeleteButton from "../Buttons/DeleteButton";
import { createTemplate } from "@/redux/reducers/templateSlice";

const EditTemplate = () => {
  const dispatch = useDispatch();
  const template = useSelector((state) => state.currentTemplate);
  const [error, setError] = useState("");

  console.log(template);

  const handleUpdate = async (formData) => {
    console.log("start");
    const updatedTemplate = await handleEditTemplate(
      formData,
      template.id,
      setError
    );

    console.log(updatedTemplate, "UPDATED");
    if (updatedTemplate) {
      dispatch(createTemplate(updatedTemplate));
      dispatch(clearCurrentModal());
      // dispatch(setApplicationFormLoaded(false));
    }
  };

  const handleDelete = async () => {
    // const response = await handleDeleteApplication(application.id);

    if (response) {
      //   dispatch(deleteApplication(application));
      //   dispatch(cascadeDeleteContacts(application.id));
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
