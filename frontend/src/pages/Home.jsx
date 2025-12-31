import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    // Remove default axios auth header
    try {
      // eslint-disable-next-line no-undef
      const axios = require("axios");
      delete axios.defaults.headers.common["Authorization"];
    } catch (err) {}
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome {user?.username || "User"} ✅
      </h1>
      <p className="text-gray-600 mt-2">You are viewing a protected page.</p>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
