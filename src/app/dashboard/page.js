import Nav from "../../../components/Nav";
import Workflow from "../../../components/Workflow";
import Applications from "../../../components/Applications";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col overflow-y-hidden">
      <Nav />
      <div className="grid grid-cols-3 overflow-scroll">
        <h1 className="">daily reachout list</h1>
        <Workflow />
        <Applications />
      </div>
    </div>
  );
};

export default Dashboard;
