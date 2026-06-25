import React from "react";

export default function UserPersonalInfo({ children }) {
  return (
    <div class="card text-center">
      <div class="card-header fs-4 fw-semibold text-start">
        Personal Information
      </div>
      {children}
      <div class="card-body">
        <div className="name row g-3 ">
          <div class="col-12 col-md-6">
            <label for="firstName" class="form-label text-start w-100">
              First Name
            </label>
            <input type="text" class="form-control p-3 border" id="firstName" />
          </div>

          <div class="col-12 col-md-6">
            <label for="lastName" class="form-label text-start w-100">
              Last Name
            </label>
            <input type="text" class="form-control p-3" id="lastName" />
          </div>
        </div>

        <div class="mt-3">
          <label for="jobTitle" class="form-label text-start w-100">
            Jop Title
          </label>
          <input type="text" class="form-control p-3" id="jobTitle" />
        </div>
      </div>
      <div class="card-footer text-body-secondary text-end">
        <button className="save-changes-btn btn custom-btn-primary fs-4 fw-medium px-3 py-2 ">
          Save Changes
        </button>
      </div>
    </div>
  );
}
