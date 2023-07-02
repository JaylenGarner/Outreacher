"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { createApplication } from "@/redux/reducers/applicationSlice";

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
      // dispatch(setWorkflow("Dashboard"));
      dispatch(createApplication(data));
      return data;
    } else {
      setError(data);
    }
  };

  return (
    <div className=" h-full ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex_center space-y-3  w-full overflow-y-scroll"
      >
        {error && (
          <span className="text-base w-5/6 text-center text-red-500">
            {error}
          </span>
        )}

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

        <textarea
          placeholder="Notes..."
          cols={30}
          rows={3}
          className="w-5/6 p-2 border border-black rounded-md text-ellipsis text-lg"
        ></textarea>

        <button
          type="submit"
          className="border border-black rounded-md text-ellipsis w-3/6 h-10"
        >
          Log
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
