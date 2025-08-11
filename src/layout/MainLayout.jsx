import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen ">
      <div className="mb-16 ">
        <Navbar></Navbar>
      </div>
      <div
        className=" py-5 bg-linear-to-r from-gray-800 to-gray-800
min-h-[calc(100vh-180px)] min-h-screen  "
      >
        <div className="">
          <Outlet />
        </div>
      </div>
      <div className="">
        {" "}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
