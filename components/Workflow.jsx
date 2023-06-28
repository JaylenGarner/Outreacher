"use client";

import { useSelector } from "react-redux/es/hooks/useSelector";
import Application from "./Application";
import ApplicationForm from "./ApplicationForm";

const Workflow = () => {
  const workflow = useSelector((state) => state.workflowReducer);

  return (
    <div className="text-lg font-bold flex flex-col items-center">
      <h1 className="pt-4">Work Flow</h1>
      {workflow === "Application Form" && <ApplicationForm />}
      {workflow === "Applictaion Details" && <Application />}
    </div>
  );
};

export default Workflow;
