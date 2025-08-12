import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="  ">
      <div className="mb-16 ">
        <Navbar></Navbar>
      </div>
      <div
        className=" py-2 bg-linear-to-r from-gray-800 to-gray-800
min-h-[calc(100vh-125px)]    "
      >
        <div className="">
          <Outlet />
        </div>
      </div>
      <div className="bg-gray-700">
        {" "}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
