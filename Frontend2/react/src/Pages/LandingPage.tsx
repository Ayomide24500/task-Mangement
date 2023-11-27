import { BsCheckAll } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
// import { GiTeamwork } from "react-icons/gi";
import pix from "../assets/tasks.png";

const LandingPage = () => {
  return (
    <div className="w-[full]">
      <div className="flex items-center justify-center bg-gray-100 py-16 px-4">
        <div className="w-[40%] max-w-[700px] h-[300px]">
          <h1 className="font-bold text-2xl text-gray-800 pt-12">
            Manage your tasks with ease
          </h1>
          <p className="text-gray-600">
            Get organized and productive with our simple and powerful task
            management system.
          </p>
          <div className="flex items-center mt-4">
            <BsCheckAll className="text-gray-800 mr-2" />
            <span>Create and manage task lists</span>
          </div>
          <div className="flex items-center mt-2">
            <FaListAlt className="text-gray-800 mr-2" />
            <span>Prioritize and track your tasks</span>
          </div>
          <div className="flex items-center mt-2">
            <FaListAlt className="text-gray-800 mr-2" />
            <span>Collaborate with your team</span>
          </div>
          <div className="mt-4">
            <a
              href="/signup"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
            >
              Get Started
            </a>
          </div>
        </div>
        <img src={pix} alt="" className="ml-8" style={{ width: "50%" }} />
      </div>
    </div>
  );
};

export default LandingPage;
