"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "next-auth/react";
import { setCurrentModal } from "@/redux/reducers/structure/currentModalSlice";
import { motion } from "framer-motion";
import SubmitButton from "../Buttons/SubmitButton";
import TriangleSpinner from "../LoadingSpinners/TriangleSpinner";
import TextHover from "../Animations/HoverScaleSmall";

const Login = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      setError("Invalid credentials, please try again.");
      setIsLoading(false);
    } else {
      dispatch(setCurrentModal(null));
      setIsLoading(false);
    }
  };

  return (
    <form className="form pt-4" onSubmit={handleSubmit}>
      <h1 className="modal_header">Login to Outreacher</h1>

      {error && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center text-red-500 font-bold text-lg"
        >
          {error}
        </motion.span>
      )}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="input"
      ></input>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="input"
      ></input>

      <div className="pt-2">
        {!isLoading ? <SubmitButton label={"Login"} /> : <TriangleSpinner />}
      </div>

      <span className="flex">
        Don't have an account? &nbsp;
        <TextHover>
          <span
            className="form_link"
            onClick={() => dispatch(setCurrentModal("Signup"))}
          >
            Signup here
          </span>
        </TextHover>
      </span>
    </form>
  );
};

export default Login;
