"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "next-auth/react";
import handleSignup from "../../lib/handlers/user/handleSignup";
import { motion } from "framer-motion";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";
import SubmitButton from "../Buttons/SubmitButton";
import TriangleSpinner from "../LoadingSpinners/TriangleSpinner";

const Signup = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const response = await handleSignup(
      firstName,
      email,
      password,
      confirmPassword,
      setError
    );

    console.log(response);

    if (response.ok) {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      dispatch(setCurrentModal(null));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <form className="form pt-4" onSubmit={handleSubmit}>
      <h1 className="modal_header">Signup for Outreacher</h1>

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
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        required
        className="input"
      ></input>

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

      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        required
        className="input"
      ></input>

      <div className="pt-2">
        {!isLoading ? (
          <SubmitButton label={"Create Account"} />
        ) : (
          <TriangleSpinner />
        )}
      </div>

      <span>
        Have an account? &nbsp;
        <span
          className="form_link"
          onClick={() => dispatch(setCurrentModal("Login"))}
        >
          Login here
        </span>
      </span>
    </form>
  );
};

export default Signup;
