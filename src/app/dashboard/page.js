"use client";

import Nav from "../../../components/Nav";
import Applications from "../../../components/Applications";
import Backdrop from "../../../components/Backdrop";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Dashboard = () => {
  const modalOpen = useSelector((state) => state.currentModalReducer);

  console.log(modalOpen);

  return (
    <div className="h-screen w-screen flex flex-col overflow-y-hidden">
      <Nav />
      {modalOpen && <Backdrop />}
      <div className="grid grid-cols-2 overflow-scroll">
        <h1>reach out list</h1>
        <Applications />
      </div>
    </div>
  );
};

export default Dashboard;
