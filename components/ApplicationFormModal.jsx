"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { createApplication } from "@/redux/reducers/applicationSlice";
import { clearCurrentModal } from "@/redux/reducers/currentModal";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ApplicationFormModal = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [posting, setPosting] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("Queue");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/applications/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: session.user._id,
        company,
        position,
        posting,
        salary,
        location,
        notes,
        status,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch(createApplication(data));
      dispatch(clearCurrentModal());
      return data;
    } else {
      setError(data);
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
      <div className="flex flex_center">
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
          <span className="pt-1"> &nbsp;</span>
        )}

        <div className="flex justify-around w-full">
          <input
            type="text"
            value={company}
            placeholder="Company"
            onChange={(e) => setCompany(e.target.value)}
            required
            className="input"
          />

          <input
            type="text"
            value={position}
            placeholder="Position"
            onChange={(e) => setPosition(e.target.value)}
            className="input"
            required
          />
        </div>

        <div className="flex justify-around w-full">
          <input
            type="text"
            value={posting}
            placeholder="Posting"
            onChange={(e) => setPosting(e.target.value)}
            className="input"
          />

          <input
            type="text"
            value={salary}
            placeholder="Salary"
            onChange={(e) => setSalary(e.target.value)}
            className="input"
          />
        </div>

        <div className="flex justify-around w-full">
          <input
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            className="input"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="input"
          >
            <option>Queue</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Coding Challenge</option>
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
          className=" input textarea"
        ></textarea>

        <motion.button
          transition={{ duration: 0.7 }}
          initial={{
            background: "linear-gradient(to bottom left, #D846EE, #4E45E4)",
          }}
          whileHover={{
            scale: 1.02,
            opacity: 0.95,
            background: "linear-gradient(to bottom left, #E01D48 , #7B39ED)",
          }}
          whileTap={{ scale: 0.8 }}
          type="submit"
          className="button "
        >
          Log
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ApplicationFormModal;
