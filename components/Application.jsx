"use client";

import { useSelector } from "react-redux/es/hooks/useSelector";

const Application = () => {
  const currentApplication = useSelector(
    (state) => state.currentApplicationReducer
  );

  return (
    <div className=" p-4 flex flex-col w-full h-full overflow-hidden text-ellipsis text-center space-y-2">
      <h1 className="text-2xl font-bold truncate">
        {currentApplication?.company}
      </h1>
      <span className="text-xl font-semibold italic">
        {currentApplication?.position}
      </span>
      <span>{currentApplication?.status}</span>
      <span>{currentApplication?.salary || ""}</span>
      <span>{currentApplication?.posting || ""}</span>
      <span>{currentApplication?.location || ""}</span>
      <span>{currentApplication?.notes || ""}</span>
    </div>
  );
};

export default Application;
