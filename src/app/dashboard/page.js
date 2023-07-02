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
      className="h-screen w-screen flex flex-col overflow-y-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "linear", duration: 1 }}
    >
      <Nav />
      {modalOpen && <Backdrop />}
      <div className="grid grid-cols-2 overflow-scroll">
        <h1>reach out list</h1>
        <Applications />
      </div>
    </motion.div>
  );
};

export default Dashboard;
