import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

export const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <section className="section py-10">
      <div className="container flex justify-center">
        <div className="card shadow-md w-[500px] rounded-md bg-white py-5 px-10">
          <h3 className="text-center text-lg text-black font-medium !mb-4">
            Login to your account
          </h3>

          <form className="w-full flex flex-col gap-3">
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
          </form>
        </div>
      </div>
    </section>
  );
};
