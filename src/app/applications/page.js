"use client";

import { useState } from "react";

import ApplicationForm from "../../../components/ApplicationForm";

const Applications = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="flex flex-col flex_center">
      <h1 className="text-xl font-bold">Applications</h1>
      {!formOpen ? (
        <button onClick={() => setFormOpen(true)}>New Application</button>
      ) : (
        <ApplicationForm setFormOpen={setFormOpen} />
      )}
    </div>
  );
};

export default Applications;
