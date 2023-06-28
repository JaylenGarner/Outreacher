"use client";

const Application = ({
  currentApplication,
  setCurrentApplication,
  setApplicationOpen,
}) => {
  return (
    <div className=" p-4 flex flex-col w-full text-ellipsis overflow-x-hidden h-full">
      <button
        onClick={() => {
          setApplicationOpen(false);
          setCurrentApplication(null);
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

      <span
        onClick={() => {
          setApplicationOpen(false);
          setCurrentApplication(null);
        }}
      >
        x
      </span>
    </div>
  );
};

export default Application;
