import Nav from "../../../components/Nav";
import Workflow from "../../../components/Workflow";
import Applications from "../../../components/Applications";

const Dashboard = () => {
  return (
    <div className="max-h-screen flex flex-col">
      <Nav />
      <div className="grid grid-cols-3 overflow-y-scroll">
        <h1 className="">daily reachout list</h1>
        <Workflow />
        <Applications />
      </div>
      <span className="p-3 bg-slate-900 text-white absolute bottom-0 w-full">
        Footer Placeholder
      </span>
    </div>
  );
};

export default Dashboard;
