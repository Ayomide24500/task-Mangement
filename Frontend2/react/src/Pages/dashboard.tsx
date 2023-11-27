import { NavLink, useParams } from "react-router-dom";
import Sider from "../components/Sidebar";
import { FaListAlt, FaPlusSquare, FaCheckSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
import Projectpage from "../Pages/Projectpage";
import { viewProjectOne } from "../api/projectapi";
const Dashboard = () => {
  const { projectID } = useParams();
  // console.log(userID);
  const [toggle, setToggle]: any = useState(false);
  const [state, setState]: any = useState([]);
  useEffect(() => {
    viewProjectOne(projectID!).then((res: any) => {
      setState(res.project);
    });
  }, [projectID]);

  return (
    <div className="flex min-h-screen">
      <Sider />

      <main className="w-3/4 flex flex-col p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Task Management</h2>
          <div className="flex items-center">
            <NavLink to="">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                onClick={() => {
                  setToggle(true);
                }}
              >
                Create Project <FaPlusSquare className="ml-2" />
              </button>
            </NavLink>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
              Create Task <FaListAlt className="ml-2" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap -mb-4">
          <div className="w-1/3 px-4 mb-4 bg">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-4">Todo</h3>
              <div className="space-y-4">
                <div className="p-2 bg-white rounded-md flex items-center">
                  <FaCheckSquare className="text-green-500 mr-2" />

                  <FaListAlt className="text-blue-500 mr-2" />
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {toggle && (
          <Projectpage
            setToggle={setToggle}
            project={true}
            projectID={projectID}
          />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
