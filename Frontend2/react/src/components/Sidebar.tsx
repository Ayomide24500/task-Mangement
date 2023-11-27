import { Link } from "react-router-dom";
import { FaBars, FaHome, FaTasks, FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { viewUserProject } from "../api/projectapi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [state, setState]: any = useState([]);
  useEffect(() => {
    viewUserProject().then((res: any) => {
      setState(res);
    });
  }, []);
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
        <button className="text-gray-300 hover:text-white">
          <FaBars className="text-lg" />
        </button>
        <h3 className="font-bold">Task Manager</h3>
      </div>
      <nav className="flex-grow">
        <ul className="flex flex-col px-4 mt-4">
          <li className="mb-4">
            <Link
              to="/"
              className="flex items-center p-2 rounded-md hover:bg-gray-700"
            >
              <FaHome className="mr-2" />
              <span className="font-semibold">Dashboard</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/tasks"
              className="flex items-center p-2 rounded-md hover:bg-gray-700"
            >
              <FaTasks className="mr-2" />
              <span className="font-semibold">Tasks</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/profile"
              className="flex items-center p-2 rounded-md hover:bg-gray-700"
            >
              <FaUserCircle className="mr-2" />
              <span className="font-semibold">Profile</span>
            </Link>
          </li>
        </ul>
        <div>
          {state?.map((props: any) => (
            <Link
              to={`/project/${props._id}`}
              className="w-[50%] h-[40px] flex items-center justify-center mt-[10px] ml-9 border rounded-sm shadow-md cursor-pointer bg-green-300"
              key={props._id}
              onClick={() => {
                console.log(props._id);
              }}
            >
              <div className="mr-[10px] text-[20px]">
                <FaTasks />
              </div>
              <div className="font-bold text-1xl">
                {props?.projectName}Project
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
