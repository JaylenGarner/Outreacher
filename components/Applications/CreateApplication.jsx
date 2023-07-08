"use client";

import { useDispatch } from "react-redux";
import { createApplication } from "@/redux/reducers/applicationSlice";
import handleCreateApplication from "../../lib/application/handleCreateApplication";
import { clearCurrentModal } from "@/redux/reducers/currentModalSlice";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ApplicationForm from "./ApplicationForm";
import { useState } from "react";

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

  return (
    <>
      <div className="flex flex_center pt-4">
        <h1 className="modal_header pr-4">Log Application</h1>
        <motion.button
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="pt-4 hover:text-[#E01D48]"
          onClick={() => dispatch(clearCurrentModal())}
        >
          <FontAwesomeIcon icon={faTrash} />
        </motion.button>
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
