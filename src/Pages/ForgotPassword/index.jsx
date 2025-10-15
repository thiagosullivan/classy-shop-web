import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

export const ForgotPasswordPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  //   const forgotPassword = () => {
  //     if (formFields.email !== "") {
  //       history("/verify");
  //     }
  //   };

  return (
    <section className="section py-10">
      <div className="container flex items-center justify-center">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-10">
          <h3 className="text-center text-lg text-black !mb-4 font-medium">
            Forgot Password
          </h3>

          <form className="w-full flex flex-col gap-3">
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={`${isShowPassword ? "text" : "password"}`}
                id="newPassword"
                label="New Password *"
                variant="outlined"
                className="w-full"
                name="newPassword"
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
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={`${isShowPassword ? "text" : "password"}`}
                id="confirmPassword"
                label="Confirm Password *"
                variant="outlined"
                className="w-full"
                name="confirmPassword"
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
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
