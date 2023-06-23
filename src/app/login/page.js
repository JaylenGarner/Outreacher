"use client";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="flex flex-col space-y-2 items-center justify-center border border-slate-700 p-6">
        <h1 className="font-bold text-3xl pb-4">Login</h1>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
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
          Don't have an account? &nbsp;
          <a href="/signup" className="underline underline-offset-2">
            Signup here
          </a>
        </span>
      </form>
    </div>
  );
};

export default Login;
