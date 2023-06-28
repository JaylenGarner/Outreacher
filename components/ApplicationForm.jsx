"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { createApplication } from "@/redux/reducers/applicationSlice";
import { setWorkflow } from "@/redux/reducers/workFlowSlice";

const ApplicationForm = () => {
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
      dispatch(setWorkflow({}));
      dispatch(createApplication(data));
      return data;
    } else {
      setError(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex_center space-y-2 pt-6"
    >
      <button onClick={() => dispatch(setWorkflow({}))}>x</button>
      <h1 className="text-xl font-bold">Create Application</h1>

      {error && <span>{error}</span>}

      <input
        type="text"
        value={company}
        placeholder="Company"
        onChange={(e) => setCompany(e.target.value)}
        required
      />

      <input
        type="text"
        value={position}
        placeholder="Position"
        onChange={(e) => setPosition(e.target.value)}
        required
      />

      <input
        type="text"
        value={posting}
        placeholder="Posting"
        onChange={(e) => setPosting(e.target.value)}
      />

      <input
        type="text"
        value={salary}
        placeholder="Salary"
        onChange={(e) => setSalary(e.target.value)}
      />

      <input
        type="text"
        value={location}
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        type="textarea"
        value={notes}
        placeholder="Notes"
        onChange={(e) => setNotes(e.target.value)}
        className="w-60 h-40"
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Queue</option>
        <option>Applied</option>
        <option>Interview</option>
        <option>Coding Challenge</option>
        <option>No Response</option>
        <option>Rejected</option>
        <option>Offer</option>
        <option>Hired</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ApplicationForm;
