import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext";
import { useShowAlert } from "./hooks/CustomAlertContext";

export default function SideBar({ isMobile = false }) {
  if (!isMobile) {
    return <CustomSideBar />;
  } else if (isMobile) {
    return (
      <>
        <div
          className="offcanvas offcanvas-start "
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-body p-0">
            <CustomSideBar isMobile />
          </div>
        </div>
      </>
    );
  }
}

function CustomSideBar({ isMobile }) {
  const { LogOut } = useAuth();
  const { setAlert } = useShowAlert();
  const location = useLocation();

  let currentPage = location.pathname;

  const handleClick = () => {
    document.getElementById("clseSideBar").click();
  };

  function handleLogOut() {
    LogOut();
    setAlert("Logged out successfully!");
  }
  return (
    <aside
      className={`w-100 h-100 bg-light position-sticky top-0 start-0 flex-column justify-content-between p-3 d-flex`}
      
    >
      <div className="d-flex flex-column gap-3 w-100">
        <div className="logo d-flex m-3 gap-2">
          <span className="letter badge bg-primary fs-4 text-white rounded-circle ">
            V
          </span>
          <div>
            <h4 className=" text-center m-0 fs-5">VoltFlow</h4>
            <p className="m-0 text-secondary-emphasis">Electrical Retail</p>
          </div>
          {isMobile && (
            <button
              type="button"
              id="clseSideBar"
              className="btn-close ms-auto"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          )}
        </div>
        <div className="links d-flex flex-column align-items-center gap-1">
          <Link to="/">
            <button
              onClick={isMobile ? handleClick : null}
              type="button"
              className={`btn btn-outline-light text-secondary-emphasis text-start border-0 w-100 rounded-5 d-inline-flex gap-3 ${currentPage === "/" ? "active" : ""}`}
            >
              <i className="d-flex justify-content-center align-items-center fs-5 bi bi-grid-1x2-fill"></i>
              Home
            </button>
          </Link>
          <Link to="/products">
            <button
              onClick={isMobile ? handleClick : null}
              type="button"
              className={`btn btn-white text-secondary-emphasis text-start border-0 w-100 rounded-5 d-inline-flex gap-3 ${currentPage === "/products" ? "active" : ""}`}
            >
              <i className="d-flex justify-content-center align-items-center fs-5 bi bi-archive"></i>
              Products
            </button>
          </Link>
          <Link to="/sales">
            <button
              onClick={isMobile ? handleClick : null}
              type="button"
              className={`btn btn-white text-secondary-emphasis text-start border-0 w-100 rounded-5 d-inline-flex gap-3 ${currentPage === "/sales" ? "active" : ""}`}
            >
              <i className="d-flex justify-content-center align-items-center fs-5 bi bi-receipt-cutoff"></i>
              Sales
            </button>
          </Link>
          <Link to="/financials">
            <button
              onClick={isMobile ? handleClick : null}
              type="button"
              className={`btn btn-white text-secondary-emphasis text-start border-0 w-100 rounded-5 d-inline-flex gap-3 ${currentPage === "/financials" ? "active" : ""}`}
            >
              <i className="d-flex justify-content-center align-items-center fs-5 bi bi-currency-dollar"></i>
              Financials
            </button>
          </Link>
          <Link to="/settings">
            <button
              onClick={isMobile ? handleClick : null}
              type="button"
              className={`btn btn-white text-secondary-emphasis text-start border-0 w-100 rounded-5 d-inline-flex gap-3 ${currentPage === "/settings" ? "active" : ""}`}
            >
              <i className="d-flex justify-content-center align-items-center fs-5 bi bi-gear"></i>
              Settings
            </button>
          </Link>
        </div>
      </div>
      <div className="w-100">
        <hr />
        <button
          type="button"
          className="add-product btn btn-primary mb-2 w-100 rounded-0 d-flex align-items-center justify-content-center gap-2"
        >
          <i className="d-flex justify-content-center align-items-center fs-5 bi bi-plus"></i>
          Add Product
        </button>
        <button
          className="logout btn btn-outline-danger text-start border-0 w-100 rounded-5 d-flex align-items-center gap-2 "
          onClick={handleLogOut}
        >
          <i className="d-flex justify-content-center align-items-center fs-5 bi bi-box-arrow-right"></i>
          Logout
        </button>
      </div>
    </aside>
  );
}
