import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import Verify from "./pages/Verify";
import ResendVerification from "./pages/ResendVerification";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOtp from "./pages/VerifyOtp";
import ChangePassword from "./pages/ChangePassword";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/verify",
    element: <VerifyEmail />,
  },
  {
    path: "/verify/:token",
    element: <Verify />,
  },
  {
    path: "/resend-verification",
    element: <ResendVerification />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp/:email",
    element: <VerifyOtp />,
  },
  {
    path: "/change-password/:email",
    element: <ChangePassword />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
