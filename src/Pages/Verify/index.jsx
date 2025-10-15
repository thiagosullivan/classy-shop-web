import React from "react";
import { OtpBox } from "../../components/OtpBox";

export const VerifyPage = () => {
  return (
    <section className="section py-10">
      <div className="container flex items-center justify-center">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <div className="text-center flex items-center justify-center !mb-2">
            <img src="../src/assets/verify.png" width="80" />
          </div>
          <h3 className="text-center text-lg text-black mt-4 font-medium">
            Verify OTP
          </h3>

          <OtpBox />
        </div>
      </div>
    </section>
  );
};
