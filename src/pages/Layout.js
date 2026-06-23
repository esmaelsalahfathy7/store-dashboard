import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import "./Layout.css";

export default function LayoutPage() {
  return (
    <div className="layout d-flex vh-100">
      <div
        className="d-none d-md-block position-sticky top-0 left-0"
        style={{ width: "260px", height: "100vh" }}
      >
        <SideBar />
      </div>

      <div className="content  flex-grow-1 mw-100 d-flex flex-column">
        <Navbar />
        <div
          className=" p-4 flex-grow-1 overflow-auto container"
          style={{ maxHeight: "calc(100vh - 75px)" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
