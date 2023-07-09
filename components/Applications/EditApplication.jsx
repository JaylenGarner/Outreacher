"use client";

import { useDispatch, useSelector } from "react-redux";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
import { createApplication } from "@/redux/reducers/applicationSlice";
import { deleteApplication } from "@/redux/reducers/applicationSlice";
import handleEditApplication from "../../lib/application/handleEditApplication";
import handleDeleteApplication from "../../lib/application/handleDeleteApplication";
import ApplicationForm from "./ApplicationForm";
import CreateContactButton from "../Buttons/CreateContactButton";
import ContactListButton from "../Buttons/ContactListButton";
import DeleteButton from "../Buttons/DeleteButton";

const EditApplication = () => {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.currentApplicationReducer);

  const handleUpdate = async (formData) => {
    const updatedApplication = await handleEditApplication(
      formData,
      application._id
    );

    dispatch(createApplication(updatedApplication));
    dispatch(clearCurrentModal());
  };

  const handleDelete = async () => {
    const response = await handleDeleteApplication(application._id);

    if (response) {
      dispatch(deleteApplication(application));
      dispatch(clearCurrentModal());
    }
  };

  return (
    <>
      <div className="flex flex_center pt-4 space-x-4">
        <h1 className="modal_header">
          Last Activity &nbsp;
          {new Date(application.updatedAt).toLocaleDateString()}
        </h1>
        <CreateContactButton application={application} />
        <ContactListButton application={application} />
        <DeleteButton action={handleDelete} />
      </div>
      <ApplicationForm
        type={"Edit"}
        application={application}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default EditApplication;
