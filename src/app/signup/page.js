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
    <div className="h-screen flex justify-center items-center">
      <form className="flex flex-col space-y-2 items-center justify-center border border-slate-700 p-6">
        <h1 className="font-bold text-3xl pb-4">Signup</h1>

        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
          className="border border-slate-800 p-1"
        ></input>

        <input
          type="text"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
          className="border border-slate-800 p-1"
        ></input>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="border border-slate-800 p-1"
        ></input>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="border border-slate-800 p-1"
        ></input>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="border border-slate-800 p-1"
        ></input>

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
          className="border border-slate-800 p-1"
        ></input>

        <span className="pt-4">
          Have an account? &nbsp;
          <a href="/login" className="underline underline-offset-2">
            Login here
          </a>
        </span>
      </form>
    </div>
  );
};

export default Signup;
