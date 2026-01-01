import React from "react";

const VerifyEmail = () => {
  return (
    <div className="relative w-full h-190 overflow-hidden">
      <div className="min-h-screen flex items-center justify-center bg-green-100 px-4">
        <div className=" bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg text-center mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-4">
            ✅ Check Your Email
          </h2>
          <p className="text-gray-400 text-sm">
            We've sent you an email to verify your account. Please check your
            inbox and click the verification link
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
