import React from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-green-600">
              Note-App
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
