"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "next-auth/react";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import { motion } from "framer-motion";
import SubmitButton from "../Buttons/SubmitButton";

const Login = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("HERE");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log("HERE AFTER RESULE", result);

    if (result.error) {
      setError("Invalid credentials, please try again.");
    } else {
      dispatch(setCurrentModal(null));
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
        <SubmitButton label={"Login"} />
      </div>

      <span>
        Don't have an account? &nbsp;
        <span
          className="form_link"
          onClick={() => dispatch(setCurrentModal("Signup"))}
        >
          Signup here
        </span>
      </span>
    </form>
  );
};

export default Login;
