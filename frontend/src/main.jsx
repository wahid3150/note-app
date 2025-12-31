import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";
import axios from "axios";

// If a token exists from a previous session, set it as the default header
const token = localStorage.getItem("accessToken");
if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
