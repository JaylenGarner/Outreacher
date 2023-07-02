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
      // dispatch(setWorkflow("Dashboard"));
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
      className="bg-white h-[500px] w-[800px] rounded-xl z-20"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex_center ">
        <h1 className="text-2xl pt-4 pr-4 font-bold text-center">
          Log Application
        </h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="pt-4 hover:text-red-600"
          onClick={() => dispatch(clearCurrentModal())}
        >
          <FontAwesomeIcon icon={faTrash} />
        </motion.button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full h-full items-center space-y-4 pr-8 pl-8"
      >
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
          className="w-[662px] p-2 border border-black rounded-md text-ellipsis text-lg"
        ></textarea>

        <button
          type="submit"
          className="violet_gradient rounded-md text-ellipsis w-[300px] h-14 text-white text-xl font-bold"
        >
          Log
        </button>
      </form>
    </motion.div>
  );
};

export default ApplicationFormModal;
