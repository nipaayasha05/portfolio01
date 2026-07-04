import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
// import AOS from "aos";
// import "aos/dist/aos.css";

const MainLayout = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000, once: true });
  //   // duration = animation সময় (ms), once = একবারই animate করবে
  // }, []);

  return (
    <div className=" font-montserrat overflow-x-hidden ">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div
        className=" py-2   
min-h-[calc(100vh-115px)]    "
      >
        <div className="">
          <Outlet />
        </div>
      </div>
      <div className="bg-gray-900">
        {" "}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
