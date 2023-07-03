"use client";

import { useDispatch, useSelector } from "react-redux";
import { clearCurrentModal } from "@/redux/reducers/currentModal";
import { motion } from "framer-motion";
import ApplicationForm from "./ApplicationForm";
import handleEditApplication from "../lib/application/handleEditApplication";
import { createApplication } from "@/redux/reducers/applicationSlice";
import { deleteApplication } from "@/redux/reducers/applicationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const EditApplication = () => {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.currentApplicationReducer);

  const handleUpdate = async (formData) => {
    console.log("form data in component", formData);

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
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 230,
        damping: 30,
      }}
      className="modal"
      onClick={(e) => e.stopPropagation()}
    >
      <span> </span>

      <div className="flex flex_center">
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
    </motion.div>
  );
};

export default EditApplication;
