"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setApplicationFormLoaded } from "@/redux/reducers/applicationFormLoadedSlice";
import { motion } from "framer-motion";
import SubmitButton from "../Buttons/SubmitButton";
import TriangleSpinner from "../LoadingSpinners/TriangleSpinner";

const TemplateForm = ({
  type,
  template,
  handleCreate,
  handleUpdate,
  error,
}) => {
  const dispatch = useDispatch();

  // const applicationFormLoaded = useSelector(
  //   (state) => state.applicationFormLoaded
  // );

  const [name, setName] = useState(template ? template?.company : "");
  const [body, setBody] = useState(template ? template?.body : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(setApplicationFormLoaded(true));

    const formData = {
      e,
      name,
      body,
    };

    type === "Create" ? handleCreate(formData) : handleUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error ? (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pt-1 text-center text-red-500 font-bold"
        >
          {error}
        </motion.span>
      ) : (
        <span className="pt-1"></span>
      )}

      <input
        type="text"
        value={name}
        placeholder="Template Name"
        onChange={(e) => setName(e.target.value)}
        required
        className="input_two"
      />

      <select
        // value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="input_two"
      >
        <option>Queue</option>
        <option>Applied</option>
        <option>Interview</option>
        <option>No Response</option>
        <option>Rejected</option>
        <option>Offer</option>
        <option>Hired</option>
      </select>

      <textarea
        placeholder="Template..."
        cols={30}
        rows={4}
        className="textarea"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      {/* {!applicationFormLoaded ? (
        <SubmitButton label={type === "Create" ? type : "Save"} />
      ) : (
        <TriangleSpinner />
      )} */}
    </form>
  );
};

export default TemplateForm;
