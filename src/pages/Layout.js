import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout d-flex">
      <div
        className="d-none d-md-block position-sticky top-0 left-0"
        style={{ width: "260px", height: "100vh" }}
      >
        <SideBar />
      </div>

      <div className="content vh-100 flex-grow-1 mw-100 d-flex flex-column">
        <Navbar />
        <div className=" bg-light p-4 flex-grow-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
