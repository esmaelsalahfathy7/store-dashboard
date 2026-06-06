import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SideBar from "./SideBar";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout d-flex">
      <div
        className="d-none d-md-block"
        style={{ width: "260px", height: "100vh" }}
      >
        <SideBar />
      </div>
      <SideBar isMobile={true} />
      <div className="content" style={{ flex: "1" }}>
        <Navbar />
        <main
          className="bg-light overflow-y-auto"
          style={{
            minHeight: "5003px",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
