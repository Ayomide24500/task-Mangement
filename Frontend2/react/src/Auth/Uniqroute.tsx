import { Link } from "react-router-dom";

function CompanyCodeInput() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-700">
      <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Enter company code"
          className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div>
          <Link to="/dashboard">
            <button className="h-[40px] w-[80px] rounded-md bg-slate-500 ml-[80px] mt-[10px]">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompanyCodeInput;
