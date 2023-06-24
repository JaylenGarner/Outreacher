import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between border-b p-2 border-slate-500">
      <a href="/">
        <h1 className="text-xl font-bold">Outreacher</h1>
      </a>
      <button>Sign Out</button>
    </div>
  );
};

export default Nav;
