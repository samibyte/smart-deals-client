import React from "react";
import Navbar from "../components/ui/Navbar";
import Login from "../pages/Login";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header className="sticky top-0 shadow-sm">
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
