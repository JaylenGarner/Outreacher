"use client";

import { useState } from "react";
import handleSignup from "../../../../lib/handleSignup";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignup(
      firstName,
      lastName,
      email,
      username,
      password,
      confirmPassword,
      setError,
      router
    );
  };

  return (
    <div className="grow flex_center">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form_heading">Signup</h1>

        {error && <span className="text-red-700">{error}</span>}

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
          value={lastName}
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

        <button type="submit" className="pt-2">
          Sign Up
        </button>

        <span>
          Have an account? &nbsp;
          <a href="/auth/login" className="form_link">
            Login here
          </a>
        </span>
      </form>
    </div>
  );
};

export default Signup;
