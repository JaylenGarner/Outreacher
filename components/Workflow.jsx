"use client";

import { useSelector } from "react-redux/es/hooks/useSelector";
import ApplicationForm from "./ApplicationForm";

const Workflow = () => {
  const workflow = useSelector((state) => state.workflowReducer);

  return (
    <div className="text-lg font-bold flex bg-blue-600 justify-center">
      <h1 className="pt-4">Work Flow</h1>
      {workflow && workflow === "Application Form" && <ApplicationForm />}
    </div>
  );
};

export default Workflow;
