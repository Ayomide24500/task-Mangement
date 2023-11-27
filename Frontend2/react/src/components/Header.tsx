import pix from "../assets/postman.svg";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const HandleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="w-full h-[60px] flex justify-between items-center">
        <div className="w-[50%] h-[40px] flex justify-between items-center">
          <img
            src={pix}
            alt="img"
            className="h-[40px] w-[40px] object-cover ml-10"
          />
          <div className="w-[90%] h-[40px] flex justify-center items-center gap-11 position-relative">
            <nav className="text-slate-400 flex justify-center items-center font-semibold">
              Product
              <MdKeyboardArrowDown
                className={`mt-1 ml-2 font-semibold cursor-pointer ${
                  show ? "transform rotate-180" : "transition-all-350ms"
                }`}
                onClick={HandleShow}
              />
            </nav>
            <Link to="/Pricing">
              <nav className=" text-slate-400 font-semibold">Pricing</nav>
            </Link>
            <nav className=" text-slate-400 font-semibold">Enterprises</nav>
            <nav className="text-slate-400 flex justify-center items-center font-semibold">
              Resources and support
              {/* <MdKeyboardArrowDown
                className={`mt-1 ml-2 font-semibold ${
                  show ? "transform rotate-180" : ""
                }`}
              /> */}
            </nav>
            <nav className=" text-slate-400 font-semibold">
              Public Api Network
            </nav>
          </div>
        </div>
        <div className="w-[20%] h-[47px] gap-10 flex justify-center items-center mr-10">
          <Link to="/signup">
            <button className="h-[40px] w-[150px] border">Sign Up</button>
          </Link>
          <Link to="/signin">
            <button className="h-[40px] w-[150px] border">Sign in</button>
          </Link>
        </div>
      </div>
      {show ? (
        <div className="absolute top-[60px] left-[80px] h-[300px] w-[800px] bg-white-500 rounded-lg shadow-lg z-10 flex justify-center items-center">
          <div className="w-[30%] h-[100%] bg-white">
            <h1 className="font-bold text-1xl ml-11 mt-4">Get Started</h1>
            <p className="ml-6 mt-4 hover:bg-slate-200 h-[35px] px-5 cursor-pointer py-1">
              What is postman
            </p>
            <p className="ml-6 mt-4 hover:bg-slate-200 h-[35px] px-5 cursor-pointer py-1">
              Customer Stories
            </p>
            <Link to="http://postman.com">
              <p className="ml-6 mt-4 hover:bg-slate-200 h-[35px] px-5 cursor-pointer py-1 text-blue-700">
                Download Postman
              </p>
            </Link>
          </div>
          <div className="w-[30%] h-[100%] bg-white flex-column items-center justify-center overflow-auto">
            <h1 className="font-bold text-1xl ml-11 mt-4">Api Platform</h1>
            <p className="ml-6 mt-2 hover:bg-slate-200 h-[35px] px-2 cursor-pointer py-1">
              Collaborate in workspaces
            </p>
            <p className="ml-6 mt-2 hover:bg-slate-200 h-[35px] px-2 cursor-pointer py-1">
              Organized with Collections
            </p>
            <p className="ml-6 mt-2 hover:bg-slate-200 h-[35px] px-2 cursor-pointer py-1">
              Explore the Api Client
            </p>
            <p className="ml-6 mt-2 hover:bg-slate-200 h-[35px] px-2 cursor-pointer py-1">
              Build Postman Api flow
            </p>
            <p className="ml-6 mt-2 hover:bg-slate-200 h-[35px] px-2 cursor-pointer py-1">
              work smarter with postbot
            </p>
          </div>
          <div className="w-[40%] h-[100%] bg-white">
            <h1 className="font-bold text-1xl ml-11 mt-4">
              Enterprise Solution
            </h1>
            <p className="ml-6 mt-4 hover:bg-slate-200 h-[35px] px-5 cursor-pointer py-1">
              Enterprises Essential
            </p>
            <p className="ml-6 mt-4 hover:bg-slate-200 h-[35px] px-5 cursor-pointer py-1">
              Api Text Automation
            </p>
            <p className="ml-6 mt-4 hover:bg-slate-200 h-[35px] px-5 cursor-pointer py-1 text-blue-700">
              Internal Api Management
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
