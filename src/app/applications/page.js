"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import ApplicationForm from "../../../components/ApplicationForm";
import Application from "../../../components/Application";

const Applications = () => {
  const applications = useSelector((state) => state.applicationReducer);
  const [formOpen, setFormOpen] = useState(false);
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [currentApplication, setCurrentApplication] = useState(null);

  console.log("current app", currentApplication);

  return (
    <div className="flex flex-col flex_center space-y-5">
      <h1 className="text-xl font-bold">Applications</h1>

      {!formOpen ? (
        <button onClick={() => setFormOpen(true)}>New Application</button>
      ) : (
        <ApplicationForm setFormOpen={setFormOpen} />
      )}

      {applicationOpen && (
        <div className="border-2 p-4 flex flex-col">
          <h1 className="text-lg font-bold">Application Details</h1>
          <span>{currentApplication?.company}</span>
          <span>{currentApplication?.position}</span>
          <span>{currentApplication?.status}</span>
          <span>{currentApplication?.salary || ""}</span>
          <span>{currentApplication?.posting || ""}</span>
          <span>{currentApplication?.location || ""}</span>
          <span>{currentApplication?.notes || ""}</span>

          <span
            onClick={() => {
              setApplicationOpen(false);
              setCurrentApplication(null);
            }}
          >
            x
          </span>
        </div>
      )}

      {applications &&
        Object.values(applications).map((application) => {
          const applicationId = application._id;

          return (
            <div
              key={applicationId}
              onClick={() => {
                setCurrentApplication(applications[applicationId]);
                setApplicationOpen(true);
              }}
              className="border border-slate-800 p-2 flex flex-col"
            >
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
