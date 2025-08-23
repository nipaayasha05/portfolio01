import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className=" font-montserrat overflow-x-hidden ">
      <div className="mb-14 ">
        <Navbar></Navbar>
      </div>
      <div
        className=" py-2 bg-linear-to-r from-gra-900 to-gray-80 bg-gray-900
min-h-[calc(100vh-125px)]    "
      >
        <div className="max-w-6xl mx-auto">
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
