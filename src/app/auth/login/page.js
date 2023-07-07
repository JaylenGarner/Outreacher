"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
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
  };

  return (
    <div className="grow flex_center">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form_heading">Login</h1>

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
    </div>
  );
};

export default Login;
