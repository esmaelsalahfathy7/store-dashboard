import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div
        className={"sidebar"}
        style={{
          background: "blue",
          height: "100vh",
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "200px",
        }}
      >
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/products">
          <button>Products</button>
        </Link>
        <Link to="/sales">
          <button>Sales</button>
        </Link>
        <Link to="/other">
          <button>Other</button>
        </Link>
      </div>
      <div
        className="content"
        style={{ background: "red", marginLeft: "200px", flex: "1" }}
      >
        <nav>Nav</nav>
        <main style={{ background: "yellow", minHeight: "5000px" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
