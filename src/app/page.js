"use client";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { useSession } from "next-auth/react";
import Modal from "../../components/Modal";
import { redirect } from "next/navigation";

// If session, redirect to dashboard

const Home = () => {
  const { data: session, status } = useSession();

  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.currentModal);

  if (status === "loading") {
    return <></>;
  }

  if (session && session?.user) {
    redirect("/dashboard");
  }

  return (
    <div>
      {modalOpen && <Modal />}
      Home
      <button
        onClick={() => {
          dispatch(setCurrentModal("Login"));
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Home;
