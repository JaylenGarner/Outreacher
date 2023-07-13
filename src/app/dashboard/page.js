"use client";

import Nav from "../../../components/Nav";
import OutreachFeed from "../../../components/Contacts/OutreachFeed";
import ApplicationsFeed from "../../../components/Applications/ApplicationsFeed";
import Modal from "../../../components/Modal";
import { getApplications } from "@/redux/reducers/applicationSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getContacts } from "@/redux/reducers/contactSlice";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.currentModalReducer);

  if (!session) {
    return redirect("/");
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

  const fetchContacts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/contacts`);
      const data = await response.json();
      dispatch(getContacts(data));
    } catch (error) {
      console.log(error);
    }
  };

  if (status === "authenticated") {
    fetchApplications();
    fetchContacts();
  }

  return (
    <motion.div
      className="dashboard_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Nav />
      {modalOpen && <Modal />}
      <div className="dashboard">
        <OutreachFeed />
        <ApplicationsFeed />
      </div>
    </motion.div>
  );
};

export default Dashboard;
