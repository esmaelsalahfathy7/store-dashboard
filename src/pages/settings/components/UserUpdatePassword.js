import React from "react";

export default function UserUpdatePassword() {
  return (
    <div class="card text-center">
      <div class="card-header fs-4 fw-semibold text-start">
        Security & Password
      </div>

      <div class="card-body">
        <div class="mb-3">
          <label for="currentPassowrd" class="form-label text-start w-100">
            Jop Title
          </label>
          <input
            type="text"
            class="form-control p-3"
            id="currentPassowrd"
            placeholder="••••••••••••"
          />
        </div>
        <div className="name row mt-1 g-3 ">
          <div class="col-12 col-md-6">
            <label for="newPassword" class="form-label text-start w-100">
              New Passord
            </label>
            <input type="password" class="form-control p-3" id="newPassword" />
          </div>

          <div class="col-12 col-md-6">
            <label for="confirmPassword" class="form-label text-start w-100">
              Confirm Passord
            </label>
            <input
              type="password"
              class="form-control p-3"
              id="confirmPassword"
            />
          </div>
        </div>
      </div>
      <div class="card-footer text-body-secondary d-flex justify-content-between align-items-center">
        <span>Last updated 3 months ago</span>
        <button className="update-btn btn btn-light bg-white border fs-4 fw-medium px-3 py-2  ">
          Update Changes
        </button>
      </div>
    </div>
  );
}
