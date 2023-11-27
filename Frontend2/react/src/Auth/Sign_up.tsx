// import { useState } from "react";
import { createFreeMoAccount } from "../api/Api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { SyncLoader } from "react-spinners";

const Sign_in = () => {
  const navigate = useNavigate();

  const schema = yup.object({
    companyName: yup.string().required("User name must be filled"),
    email: yup.string().email().required("Email must be filled"),
    password: yup.string().min(6).required("Password must be filled"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data) => {
    const { email, companyName, password } = data;
    createFreeMoAccount({ email, companyName, password }).then((res: any) => {
      localStorage.setItem("user", JSON.stringify(res));
      navigate("/signin");
    });
  });
  return (
    <div>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <form className="max-w-md w-full space-y-8" onSubmit={onHandleSubmit}>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Sign Up</h2>
            <p className="mt-2 text-gray-600">
              Already have an account?
              <Link to="/signin">
                <a href="#" className="text-blue-500 underline">
                  Sign in
                </a>
              </Link>
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div className="-mb-3">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Company Name
              </label>
              <input
                type="text"
                className="border-gray-300 w-full rounded-md p-2 text-gray-600 focus:border-blue-500"
                {...register("companyName")}
              />
              <div className="w-[100%] h-4  justify-end flex bg-white items-center">
                {errors.companyName?.message && (
                  <div className="text-[12px] text-red-900">
                    <p className="text-red-400 font-bold text-[12px]">
                      {errors.companyName.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="-mb-3">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                type="email"
                className="border-gray-300 w-full rounded-md p-2 text-gray-600 focus:border-blue-500"
                {...register("email")}
              />
              <div className="w-[100%] h-4  justify-end flex bg-white items-center">
                {errors.email?.message && (
                  <div className="text-[12px] text-red-900">
                    <p className="text-red-400 font-bold text-[12px]">
                      {errors.email.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="-mb-3">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                className="border-gray-300 w-full rounded-md p-2 text-gray-600 focus:border-blue-500"
                {...register("password")}
              />
              <div className="w-[100%] h-4  justify-end flex bg-white items-center">
                {errors.password?.message && (
                  <div className="text-[12px] text-red-900">
                    <p className="text-red-400 font-bold text-[12px]">
                      {errors.password.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="-mb-3">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Confirm Password
              </label>
              <input
                type="password"
                className="border-gray-300 w-full rounded-md p-2 text-gray-600 focus:border-blue-500"
                {...register("confirm")}
              />
              <div className="w-[100%] h-4  justify-end flex bg-white items-center">
                {errors.confirm?.message && (
                  <div className="text-[12px] text-red-900">
                    <p className="text-red-400 font-bold text-[12px]">
                      {errors.confirm.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="w-[95%]">
              <button
                className="w-full flex bg-purple-600 rounded-sm justify-center py-3 text-white duration-300 transition-all hover:shadow-md "
                type="submit"
              >
                Sign Up
              </button>
              <div className="text-[12px] mt-2 text-center">
                Already have an Account,
                <Link to="/signin">
                  <strong className="text-purple-900 ml-1 font-bold">
                    Sign in here
                  </strong>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign_in;
