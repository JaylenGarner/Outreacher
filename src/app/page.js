"use client";

import { useDispatch, useSelector } from "react-redux";
import AuthButton from "../../components/Buttons/AuthButton";
import { useSession } from "next-auth/react";
import Modal from "../../components/Modal";
import BlobArt from "../../components/BlobArt";
import { redirect } from "next/navigation";

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
    <div className="h-screen flex_center">
      {modalOpen && <Modal />}
      <div className="flex flex_center flex-col space-y-6 max-w-[650px]">
        <h1 className="text-8xl font-bold text-white">Outreacher</h1>
        <p className="text-center  text-slate-300 font-semibold text-2xl flex-wrap">
          Say goodbye to the hassle of manual follow-up tracking and let
          Outreacher simplify your job search. Our mission is to streamline your
          networking agenda and maximize the value of your outreach efforts.
          Spend less time on organization and more on making new connections.
        </p>

        <div className="flex w-full flex_center space-x-8">
          <AuthButton type={"Login"} />
          <AuthButton type={"Signup"} />
        </div>
      </div>

      <BlobArt />
    </div>
  );
};

export default Home;
