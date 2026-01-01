import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Verify = () => {
  const { token } = useParams();
  const [status, setStatus] = useState("Verifying...");
  const navigate = useNavigate();

  useEffect(() => {
    const VerifyEmail = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8080/auth/verify",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.data.success) {
          setStatus("✅ Email Verified Successfully");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          setStatus("❌ Invalid token or expired");
        }
      } catch (error) {
        console.log(error);
        setStatus("❌ Verification failed, please try again");
      }
    };
    VerifyEmail();
  }, [token, navigate]);
  return (
    <div className="relative w-full h-190 bg-green-100 overflow-hidden">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-md text-center w-[90%] max-w-md mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            {status}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Verify;
