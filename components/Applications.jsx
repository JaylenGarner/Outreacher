"use client";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setWorkflow } from "@/redux/reducers/workFlowSlice";
import { setCurrentApplication } from "@/redux/reducers/currentApplication";

const Applications = () => {
  const dispatch = useDispatch();
  const applications = useSelector((state) => state.applicationReducer);

  return (
    <div className="flex flex-col flex_center  overflow-y-scroll">
      <div className="flex flex_center p-4">
        <h2 className="text-lg font-bold">Applications &nbsp;</h2>
        <button
          onClick={() => {
            dispatch(setWorkflow("Application Form"));
          }}
          className="text-xl"
        >
          +
        </button>
      </div>

      <div className="overflow-y-scroll w-5/6">
        {applications &&
          Object.values(applications).map((application) => {
            const applicationId = application._id;

            return (
              <div
                key={applicationId}
                onClick={() => {
                  dispatch(setCurrentApplication(applications[applicationId]));
                  dispatch(setWorkflow("Applictaion Details"));
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
