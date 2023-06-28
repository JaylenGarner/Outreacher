"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setWorkflow } from "@/redux/reducers/workFlowSlice";
import { useSelector } from "react-redux";
import Application from "./Application";

const Applications = ({ setApplicationFormOpen }) => {
  const dispatch = useDispatch();
  const applications = useSelector((state) => state.applicationReducer);
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [currentApplication, setCurrentApplication] = useState(null);

  return (
    <div className="flex flex-col flex_center  overflow-y-scroll">
      <div className="flex flex_center p-4">
        <h2 className="text-lg font-bold">Applications &nbsp;</h2>
        <button
          onClick={() => {
            console.log("opening application form");
            // setApplicationFormOpen(true);
            dispatch(setWorkflow("Application Form"));
          }}
          className="text-xl"
        >
          +
        </button>
      </div>

      {applicationOpen && (
        <Application
          currentApplication={currentApplication}
          setCurrentApplication={setCurrentApplication}
          setApplicationOpen={setApplicationOpen}
        />
      )}

      <div className="overflow-y-scroll w-5/6">
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
                className="h-1/6 border border-slate-800 p-2 flex flex-col mb-2 rounded-lg"
              >
                <h2 className="font-bold text-xl">{application.company}</h2>
                <span className="text-lg">{application.position}</span>
                <span>{application.status}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Applications;
