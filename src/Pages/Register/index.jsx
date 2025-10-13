import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, TextField } from "@mui/material";

import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <section className="section py-10">
      <div className="container flex justify-center">
        <div className="card shadow-md w-[500px] rounded-md bg-white py-5 px-10">
          <h3 className="text-center text-lg text-black font-medium !mb-4">
            Create a new account
          </h3>

          <form className="w-full flex flex-col gap-3">
            <div className="form-group">
              <TextField
                type="text"
                id="name"
                label="Full Name"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="form-group">
              <TextField
                type="email"
                id="email"
                label="Email Id *"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={`${isShowPassword ? "text" : "password"}`}
                id="password"
                label="Password *"
                variant="outlined"
                className="w-full"
              />
              <Button
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? (
                  <IoEyeOffSharp className="text-xl opacity-75" />
                ) : (
                  <IoEyeSharp className="text-xl opacity-75" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full mt-3">
              <Button className="!bg-primary !text-white w-full">
                Register
              </Button>
            </div>

            <p className="text-center !my-2 border-b border-gray-200 !pb-2">
              Already have an account?{" "}
              <Link to="/register" className="link text-sm font-medium">
                Login
              </Link>
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-center">Or continue with social account</p>

              <Button className="flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black font-bold !text-base">
                <FcGoogle className="text-xl" />
                Login with Google
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
