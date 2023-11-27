import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { loginAccount } from "../api/Api";

import { SyncLoader } from "react-spinners";
import LoadingScreen from "../components/LoadingScreen";

const Sign_in = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);
  const schema = yup.object({
    email: yup.string().email().required("email must be filled"),
    password: yup.string().min(6).required("password must be filled"),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data) => {
    setToggle(true);
    console.log(data);
    const { email, password } = data;
    loginAccount({ email, password }).then((res: any) => {
      localStorage.setItem("user", JSON.stringify(res));
      setToggle(false);
      navigate("/codeinpt");
    });
    reset();
  });

  return (
    <div className="flex items-center justify-center w-full h-screen">
      {toggle && <LoadingScreen />}
      <div className="rounded-md w-[400px] min-h-[300px] shadow-sm mx-4 ">
        <form className="pl-4 mt-8" onSubmit={onHandleSubmit}>
          <span className="font-bold text-[20px]">Log in</span>
          <br />
          <br />
          <hr />
          <br />
          <br />
          {/* Input form */}

          <div>
            <div className=" text-[12px] mt-2">email</div>
            <input
              className="pl-2  h-[40px] w-[95%] rounded-sm outline-none placeholder:text-[12px] "
              placeholder="email"
              {...register("email")}
            />
            <div className="w-[95%] justify-end flex">
              {errors.email?.message && (
                <div className="text-[12px] text-red-600 ">
                  {errors.email?.message}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className=" text-[12px] mt-2">password</div>
            <input
              type="password"
              className="pl-2  h-[40px] w-[95%] rounded-sm outline-none placeholder:text-[12px] "
              placeholder="password"
              {...register("password")}
            />
            <div className="w-[95%] justify-end flex">
              {errors.password?.message && (
                <div className="text-[12px] text-red-600 ">
                  {errors.password?.message}
                </div>
              )}
            </div>
          </div>

          <br />
          <br />
          <div className="w-[95%]">
            <button
              className="w-full flex bg-purple-600 rounded-sm justify-center py-3 text-white duration-300 transition-all hover:shadow-md "
              type="submit"
            >
              {toggle ? <SyncLoader color="white" size={11} /> : "Log in"}
            </button>
            <div className="text-[12px] mt-2 text-center">
              Don't have an Account,
              <Link to="/signup">
                <strong className="text-purple-900 ml-1 font-bold">
                  Sign up here
                </strong>
              </Link>
            </div>
            <br />
            <div className="flex w-full h-4 items-center">
              <div className="border-b w-full " />
              <div className="mx-4">or</div>
              <div className="border-b w-full " />
            </div>
            <br />
            {/* register-freemo */}
            <div className=" w-full flex mb-4">
              <Link to="/" className="w-full">
                <button className=" flex-1 w-full flex bg-red-600 rounded-sm justify-center py-3 text-white mr-1 ">
                  with Preemo
                </button>
              </Link>
              <Link to="/" className="w-full">
                <button className="w-full flex bg-blue-700 rounded-sm justify-center py-3 text-white ml-1">
                  with Bromo
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign_in;
