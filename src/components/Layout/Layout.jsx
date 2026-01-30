import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="min-vh-100 pt-80">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
