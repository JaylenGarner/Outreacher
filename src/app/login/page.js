"use client";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="grow flex_center">
      <form className="form">
        <h1 className="form_heading">Login</h1>

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

        <span className="pt-4">
          Don't have an account? &nbsp;
          <a href="/signup" className="form_link">
            Signup here
          </a>
        </span>
      </form>
    </div>
  );
};

export default Login;
