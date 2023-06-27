"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import ApplicationForm from "../../../components/ApplicationForm";

const Applications = () => {
  const applications = useSelector((state) => state.applicationReducer);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="flex flex-col flex_center space-y-5">
      <h1 className="text-xl font-bold">Applications</h1>

      {!formOpen ? (
        <button onClick={() => setFormOpen(true)}>New Application</button>
      ) : (
        <ApplicationForm setFormOpen={setFormOpen} />
      )}

      {applications &&
        Object.values(applications).map((application) => {
          return (
            <div className="border border-slate-800 p-2 flex flex-col">
              <h2 className="font-bold text-xl">{application.company}</h2>
              <span className="text-lg">{application.position}</span>
              <span>{application.status}</span>
            </div>
          );
        })}
    </div>
  );
};

export default Applications;
