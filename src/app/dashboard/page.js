"use client";

import Nav from "../../../components/Nav";
import Applications from "../../../components/Applications";
import Backdrop from "../../../components/Backdrop";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Dashboard = () => {
  const modalOpen = useSelector((state) => state.currentModalReducer);

  console.log(modalOpen);

  return (
    <motion.div
      className="dashboard_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Nav />
      {modalOpen && <Backdrop />}
      <div className="dashboard">
        <h1>reach out list</h1>
        <Applications />
      </div>
    </motion.div>
  );
};

export default Dashboard;
