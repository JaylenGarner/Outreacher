"use client";

import Nav from "../../../components/Nav";
import OutreachFeed from "../../../components/Contacts/OutreachFeed";
import ApplicationsFeed from "../../../components/Applications/ApplicationsFeed";
import Modal from "../../../components/Modal";
import { getApplications } from "@/redux/reducers/applications/applicationSlice";
import { setApplicationsLoaded } from "@/redux/reducers/applications/applicationsLoadedSlice";
import { setContactsLoaded } from "@/redux/reducers/contacts/contactsLoadedSlice";
import { setTemplatesLoaded } from "@/redux/reducers/templates/templatesLoadedSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { getContacts } from "@/redux/reducers/contacts/contactSlice";
import { getTemplates } from "@/redux/reducers/templates/templateSlice";
import { setUser } from "@/redux/reducers/user/userSlice";

const apiUrl =
  process.env.NEXT_PUBLIC_ENV === "production"
    ? "https://outreacher.app/api"
    : "http://localhost:3000/api";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.currentModal);
  const user = useSelector((state) => state.user);
  const currentFeed = useSelector((state) => state.currentFeed);

  if (!session) {
    return redirect("/");
  }

  const fetchApplications = async () => {
    try {
      const response = await fetch(`${apiUrl}/applications`);
      const data = await response.json();
      dispatch(getApplications(data));
      dispatch(setApplicationsLoaded(true));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${apiUrl}/contacts`);
      const data = await response.json();
      dispatch(getContacts(data));
      dispatch(setContactsLoaded(true));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTemplates = async () => {
    try {
      const response = await fetch(`${apiUrl}/templates`);
      const data = await response.json();
      dispatch(getTemplates(data));
      dispatch(setTemplatesLoaded(true));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchApplications();
      fetchContacts();
      fetchTemplates();
      dispatch(setUser(session.user));
    }
  }, [user]);

  return (
    <motion.div
      className="w-screen h-screen flex flex-col overflow-y-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Nav />
      {modalOpen && <Modal />}

      {/* Desktop */}
      <div className="dashboard max-split_dashboard:hidden">
        <OutreachFeed />
        <ApplicationsFeed />
      </div>

      {/* Mobile & Tablet */}
      <div className="dashboard_mobile split_dashboard:hidden">
        {currentFeed === "outreach" ? <OutreachFeed /> : <ApplicationsFeed />}
      </div>
    </motion.div>
  );
};

export default Dashboard;
