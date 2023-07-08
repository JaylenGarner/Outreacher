"use client";

import Nav from "../../../components/Nav";
import Applications from "../../../components/Applications/Applications";
import Backdrop from "../../../components/Modal";
import { getApplications } from "@/redux/reducers/applicationSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.currentModalReducer);

  if (!session) {
    return redirect("/auth/login");
  }

  const fetchApplications = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/applications`);
      const data = await response.json();
      dispatch(getApplications(data));
    } catch (error) {
      console.log(error);
    }
  };

  if (status === "authenticated") {
    fetchApplications();
  }

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
        <h1>placeholder</h1>
        <Applications />
      </div>
    </motion.div>
  );
};

export default Dashboard;
