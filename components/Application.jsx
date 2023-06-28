"use client";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setWorkflow } from "@/redux/reducers/workFlowSlice";
import { setCurrentApplication } from "@/redux/reducers/currentApplication";

const Application = () => {
  const dispatch = useDispatch();
  const currentApplication = useSelector(
    (state) => state.currentApplicationReducer
  );

  return (
    <div className=" p-4 flex flex-col w-full text-ellipsis overflow-x-hidden h-full">
      <button
        onClick={() => {
          dispatch(setWorkflow({}));
          dispatch(setCurrentApplication({}));
        }}
      >
        x
      </button>
      <h1 className="text-lg font-bold">Application Details</h1>
      <span>{currentApplication?.company}</span>
      <span>{currentApplication?.position}</span>
      <span>{currentApplication?.status}</span>
      <span>{currentApplication?.salary || ""}</span>
      <span>{currentApplication?.posting || ""}</span>
      <span>{currentApplication?.location || ""}</span>
      <span>{currentApplication?.notes || ""}</span>
    </div>
  );
};

export default Application;
