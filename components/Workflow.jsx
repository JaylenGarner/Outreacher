"use client";

import { useSelector } from "react-redux/es/hooks/useSelector";
import Application from "./Application";
import ApplicationForm from "./ApplicationForm";

const Workflow = () => {
  const workflow = useSelector((state) => state.workflowReducer);

  console.log(workflow);

  return (
    <div className="text-xl font-bold flex flex-col items-center">
      {workflow && <h1 className="text-xl font-bold m-4">{workflow}</h1>}
      {workflow === "Log Application" && <ApplicationForm />}
      {workflow === "Applictaion Details" && <Application />}
    </div>
  );
};

export default Workflow;
