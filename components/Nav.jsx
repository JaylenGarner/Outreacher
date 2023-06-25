import AuthButton from "./AuthButton";

const Nav = () => {
  return (
    <div className="flex justify-between border-b p-2 border-slate-500">
      <a href="/">
        <h1 className="text-xl font-bold">Outreacher</h1>
      </a>
      <AuthButton />
    </div>
  );
};

export default Nav;
