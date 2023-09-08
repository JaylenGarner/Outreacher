"use client";

import { useDispatch } from "react-redux";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import HoverScaleSmall from "../Animations/HoverScaleSmall";

const AuthButton = ({ type }) => {
  const dispatch = useDispatch();

  return (
    <HoverScaleSmall>
      <div
        className="bg-white w-[200px] h-[50px] max-mobile:w-[140px] rounded-full flex flex_center font-bold text-xl"
        onClick={() => {
          type === "Login"
            ? dispatch(setCurrentModal("Login"))
            : dispatch(setCurrentModal("Signup"));
        }}
      >
        {type}
      </div>
    </HoverScaleSmall>
  );
};

export default AuthButton;
