import React from "react";

export default function UserUpdatePassword({
  currentPassword,
  onPasswordChange,
}) {
  const [currentPass, setCurrentPass] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  function handleUpdatePassword() {
    if (!newPassword || !confirmPassword || !currentPass) {
      alert("Please fill in all fields");
    } else if (currentPass !== currentPassword) {
      alert("Current password is incorrect");
    } else if (newPassword === confirmPassword) {
      onPasswordChange(newPassword);
    } else {
      alert("Passwords do not match");
    }
  }
  return (
    <div className="card text-center">
      <div className="card-header fs-4 fw-semibold text-start">
        Security & Password
      </div>

      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="currentPassowrd" className="form-label text-start w-100">
            Current Password
          </label>
          <input
            type="password"
            className="form-control p-3"
            id="currentPassowrd"
            placeholder="••••••••••••"
            value={currentPass}
            onChange={(e) => setCurrentPass(e.target.value)}
          />
        </div>
        <div className="name row mt-1 g-3 ">
          <div className="col-12 col-md-6">
            <label htmlFor="newPassword" className="form-label text-start w-100">
              New Passord
            </label>
            <input
              type="password"
              className="form-control p-3"
              id="newPassword"
              placeholder="••••••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="confirmPassword" className="form-label text-start w-100">
              Confirm Passord
            </label>
            <input
              type="password"
              className="form-control p-3"
              id="confirmPassword"
              placeholder="••••••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="card-footer text-body-secondary d-flex justify-content-between align-items-center">
        <span>Last updated 3 months ago</span>
        <button
          className="update-btn btn btn-light bg-white border border-secondary fs-4 fw-medium px-3 py-2 "
          onClick={handleUpdatePassword}
        >
          Update Changes
        </button>
      </div>
    </div>
  );
}
