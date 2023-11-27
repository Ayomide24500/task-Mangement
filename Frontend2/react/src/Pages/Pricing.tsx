import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
const Pricing = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div>
        <h1 className="font-bold text-5xl text-center py-10">
          <span className="text-orange-500">Postman API</span> Platform plans
          and pricing
        </h1>
        <h2 className="text-sm-[29px] text-center leading-3 line-through-4 tracking-normal">
          Monthly <span className="font-bold"> Annually </span>
          <span className="text-green-500"> (more then 25% off) </span>
        </h2>
        <div className="flex justify-center items-center gap-10 w-full h-[100%] mt-11 flex-wrap">
          <div className="bg-white rounded-lg shadow-lg p-6 minw-[400px] h-[100%] ">
            <h2 className="text-2xl font-bold mb-4">FreeMo</h2>
            <p className="text-gray-600 mb-4">
              Team up with your colleagues around your APIs.
            </p>
            <div className="flex items-center justify-center flex-col">
              <span className="text-4xl font-bold px-4">$9</span>
              <span className="text-gray-600 ml-2 px-15">
                Per user/month, billed annually
              </span>
            </div>
            <Link to="/signup">
              <button className="bg-orange-500 text-white rounded-lg px-20 py-2 mt-4 ml-20">
                Select
              </button>
            </Link>
            <div className="w-[98%] h-[290px] ml-1 flex flex-col gap-2">
              <p className="mr-4 py-8 font-bold">
                Highlights of plan features:
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                Unlimited collaboration for plan members
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                Collection recovery for 30 days
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                1 custom domain
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                10,000 calls to Postman API
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                10 integrations
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] h-[100%]">
            <h2 className="text-2xl font-bold mb-4">Bromo</h2>
            <p className="text-gray-600 mb-4">
              Collaborate with your team to build and use APIs faster.
            </p>
            <div className="flex items-center justify-center flex-col">
              <span className="text-4xl font-bold py-3">$19</span>
              <span className="text-gray-600 ml-2 px-15">
                Per user/month, billed annually
              </span>
            </div>
            <Link to="/BromosignUp">
              <button className="bg-orange-500 text-white rounded-lg px-20 py-2 mt-4 ml-20">
                Select
              </button>
            </Link>
            <div className="w-[98%] h-[240px] ml-1 flex flex-col gap-2">
              <p className="mr-4 py-5 font-bold">
                Highlights of plan features:
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                Collections and workspace based roles
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                Single sign-on Google Workspaces
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                250 Collection Runs
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                Collection recovery for 90 days
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                Private workspaces
              </p>
              {/* <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                Static IP addresses for API testing
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                5 custom domains
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                100,000 calls to Postman API
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                50 integrations
              </p> */}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] h-[100%]">
            <h2 className="text-2xl font-bold mb-4">Premo</h2>
            <p className="text-gray-600 mb-4">
              Securely manage, organize, and accelerate API-first development at
              scale.
            </p>
            <div className="flex items-center justify-center  flex-col">
              <span className="text-4xl font-bold py-3">$99</span>
              <span className="text-gray-600 ml-2 px-15 bg-slate-200 w-[90%] h-[50px] flex items-center justify-center">
                Solutions designed to grow with your business needs.
              </span>
            </div>
            <Link to="/PremosignUp">
              <button className="bg-orange-500 text-white rounded-lg px-20 py-2 mt-4 ml-20">
                Select
              </button>
            </Link>
            <div className="w-[98%] h-[100%] ml-1 flex flex-col gap-2">
              <p className="mr-4 py-5 font-bold">
                Highlights of plan features:
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                API Builder with native Git
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                Private API Network
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                API Governance
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                API Security
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                Partner Workspaces
              </p>
              <p className="flex">
                <IoMdCheckmark className="mr-2 mt-0 text-green-800 font-bold text-2xl" />
                Automated provisioning and deprovisioning via SCIM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
