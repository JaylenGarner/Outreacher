import Nav from "../../../components/Nav";
import Workflow from "../../../components/Workflow";
import Applications from "../../../components/Applications";

const Dashboard = () => {
  return (
    <div className="max-h-screen flex flex-col">
      <Nav />

      <div className="grid grid-cols-3 overflow-y-scroll">
        <h1 className="bg-blue-300">daily reachout list</h1>
        <Workflow />
        <Applications />
      </div>
    </div>
  );
};

export default Dashboard;
