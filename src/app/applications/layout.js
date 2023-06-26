import Nav from "../../../components/Nav";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
