"use client";

import { useSession } from "next-auth/react";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { useDispatch } from "react-redux";
import LogoutButton from "./Buttons/LogoutButton";
import Link from "next/link";
import HoverScaleSmall from "./Animations/HoverScaleSmall";

const Nav = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  return (
    <div className="nav font-bold md:mr-4 md:ml-4">
      <div className="flex space-x-2 flex_center">
        <img src="/logo.png" className="w-20"></img>
      </div>

      <div className="space-x-6 flex text-2xl">
        <HoverScaleSmall>
          <span onClick={() => dispatch(setCurrentModal("Template List"))}>
            Templates
          </span>
        </HoverScaleSmall>

        <HoverScaleSmall>
          <span onClick={() => dispatch(setCurrentModal("Info"))}>Info</span>
        </HoverScaleSmall>

        {/* <HoverScaleSmall>
          <span onClick={() => dispatch(setCurrentModal("Info"))}>
            Tutorial
          </span>
        </HoverScaleSmall> */}
      </div>

      <div className="md:w-20 flex justify-end items-center">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Nav;
