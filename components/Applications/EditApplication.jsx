"use client";

import { useDispatch, useSelector } from "react-redux";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
import { motion } from "framer-motion";
import ApplicationForm from "./ApplicationForm";
import handleEditApplication from "../../lib/application/handleEditApplication";
import { createApplication } from "@/redux/reducers/applicationSlice";
import { deleteApplication } from "@/redux/reducers/applicationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
    const response = await fetch(
      `http://localhost:3000/api/applications/${application._id}`,
      {
        method: "DELETE",
      }
    );

    if (response) {
      dispatch(deleteApplication(application));
      dispatch(clearCurrentModal());
    }
  };

  return (
    <>
      <div className="flex flex_center pt-4">
        <h1 className="modal_header pr-4">
          Last Activity &nbsp;
          {new Date(application.updatedAt).toLocaleDateString()}
        </h1>
        <motion.button
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="pt-4 hover:text-[#E01D48]"
          onClick={() => handleDelete()}
        >
          <FontAwesomeIcon icon={faTrash} />
        </motion.button>
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
