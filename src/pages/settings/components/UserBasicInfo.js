import React from "react";
import pic from "../../../pic.jpg";

export default function UserBasicInfo() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center border rounded-3 p-3 bg-white gap-3 ">
      <div className="position-relative">
        <div
          className="profile-pic border border-3 border-secondary rounded-circle"
          style={{ width: "120px", height: "120px" }}
        >
          <img
            src={pic}
            alt="icon"
            className=" rounded-circle w-100 h-100 object-fit-cover"
          />
        </div>
        <i class="bi bi-camera custom-flex-center custom-bg-primary position-absolute bottom-0 end-0 p-2 rounded-4 "></i>
      </div>
      <div className="d-flex flex-column text-center">
        <h2>Marcus Vance</h2>
        <span>Store Manager • Main Branch</span>
      </div>
      <div
        className="px-3 py-1 custom-text-primary bg-primary bg-opacity-25 rounded-pill"
        style={{ fontSize: "14px" }}
      >
        Verified Account
      </div>
      <div
        className="bg-secondary w-100 p-3 rounded-2 bg-opacity-10 border"
        style={{ fontSize: "14px" }}
      >
        <span>Email Address</span>
        <div className="d-flex gap-3">
          <i class="bi bi-envelope custom-text-primary"></i>{" "}
          <p className="m-0">marcus.vance@voltmanage.io</p>
        </div>
      </div>
      <div
        className="bg-secondary w-100 p-3 rounded-2 bg-opacity-10 border"
        style={{ fontSize: "14px" }}
      >
        <span>Member Since</span>
        <div className="d-flex gap-3">
          <i class="bi bi-calendar custom-text-primary"></i>
          <p className="m-0">January 12, 2023</p>
        </div>
      </div>
    </div>
  );
}
