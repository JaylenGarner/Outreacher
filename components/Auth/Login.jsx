"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "next-auth/react";
import { setCurrentModal } from "@/redux/reducers/currentModalSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      setError("Invalid credentials, please try again.");
    }

    dispatch(setCurrentModal(null));
  };

  return (
    <form className="login_form" onSubmit={handleSubmit}>
      <h1 className="modal_header ">Login</h1>

      {error && <span className="text-red-500">{error}</span>}

      <input
        type="text"
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

      <button type="submit">Login</button>

      <span className="pt-2">
        Don't have an account? &nbsp;
        <a href="/auth/signup" className="form_link">
          Signup here
        </a>
      </span>
    </form>
  );
};

export default Login;
