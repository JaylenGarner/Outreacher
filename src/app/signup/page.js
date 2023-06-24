"use client";

import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="grow flex_center">
      <form className="form">
        <h1 className="form_heading">Signup</h1>

        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
          className="input"
        ></input>

        <input
          type="text"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
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
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
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
          Have an account? &nbsp;
          <a href="/login" className="form_link">
            Login here
          </a>
        </span>
      </form>
    </div>
  );
};

export default Signup;
