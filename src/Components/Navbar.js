import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useShowAlert } from "../Contexts/CustomAlertContext";
import SideBar from "./SideBar";

export default function Navbar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const navigate = useNavigate();
  const { setAlert } = useShowAlert();
  const { LogOut } = useAuth();

  const handleShowSideBar = () => {
    console.log("dsad");

    setShowSideBar(!showSideBar);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    LogOut();
    navigate("/login");
    setAlert("Logged out successfully!");
  };

  return (
    <nav
      className={`navbar sticky-top py-3 bg-white `}
      style={{ height: "75px" }}
    >
      <div className="container-fluid flex-nowrap">
        <span className="fs-5 fw-bold">
          <button
            className="btn me-1 d-md-none"
            type="button"
            onClick={handleShowSideBar}
          >
            <i className="bi bi-list text-black fs-3"></i>
          </button>
          VoltFlow <span className="d-none d-md-inline">Manager</span>
        </span>
        <div className="d-flex" role="search">
          <input
            className="form-control me-2 d-none d-sm-block"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn border-0 rounded-4 fs-5">
            <i className="bi bi-bell-fill"></i>
          </button>
          <button className="btn  border-0 rounded-4 fs-5 d-none d-sm-block">
            <i className="bi bi-question-circle"></i>
          </button>

          <div className="dropdown ms-2">
            <button
              className="drop-down btn border-0 dropdown-toggle 
              h-100 d-flex align-items-center gap-2"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              <img
                src="/pic.jpg"
                alt="icon"
                width="30"
                height="30"
                className="rounded-circle "
              />
              <span className="d-none d-sm-block text-black">Profile</span>
            </button>

            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="profile">
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="settings">
                  Settings
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider m-0" />
              </li>
              <li>
                <span
                  className="dropdown-item text-danger"
                  role="button"
                  onClick={handleOnClick}
                >
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showSideBar && (
        <SideBar isMobile={true} handleShowSideBar={handleShowSideBar} />
      )}
    </nav>
  );
}
