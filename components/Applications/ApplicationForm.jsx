"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setApplicationFormLoaded } from "@/redux/reducers/applications/applicationFormLoadedSlice";
import { motion } from "framer-motion";
import SubmitButton from "../Buttons/SubmitButton";
import TriangleSpinner from "../LoadingSpinners/TriangleSpinner";

const ApplicationForm = ({
  type,
  application,
  handleCreate,
  handleUpdate,
  error,
}) => {
  const dispatch = useDispatch();
  const applicationFormLoaded = useSelector(
    (state) => state.applicationFormLoaded
  );

  const [company, setCompany] = useState(
    application ? application?.company : ""
  );
  const [position, setPosition] = useState(
    application ? application?.position : ""
  );
  const [posting, setPosting] = useState(
    application ? application?.posting : ""
  );
  const [salary, setSalary] = useState(application ? application?.salary : "");
  const [location, setLocation] = useState(
    application ? application?.location : ""
  );
  const [notes, setNotes] = useState(application ? application?.notes : "");
  const [status, setStatus] = useState(
    application ? application?.status : "Queue"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setApplicationFormLoaded(true));

    const formData = {
      e,
      company,
      position,
      posting,
      salary,
      location,
      notes,
      status,
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

      <div className="input_container">
        <input
          type="text"
          value={company}
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
          required
          className="input_two"
        />

        <input
          type="text"
          value={position}
          placeholder="Position"
          onChange={(e) => setPosition(e.target.value)}
          className="input_two"
          required
        />
      </div>

      <div className="input_container">
        <input
          type="text"
          value={posting}
          placeholder="Posting"
          onChange={(e) => setPosting(e.target.value)}
          className="input_two"
        />

        <input
          type="text"
          value={salary}
          placeholder="Salary"
          onChange={(e) => setSalary(e.target.value)}
          className="input_two"
        />
      </div>

      <div className="input_container">
        <input
          type="text"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
          className="input_two"
        />

        <select
          value={status}
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
      </div>

      <textarea
        placeholder="Notes..."
        cols={30}
        rows={4}
        className="textarea"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>

      {!applicationFormLoaded ? (
        <SubmitButton label={type === "Create" ? type : "Save"} />
      ) : (
        <TriangleSpinner />
      )}
    </form>
  );
};

export default ApplicationForm;
