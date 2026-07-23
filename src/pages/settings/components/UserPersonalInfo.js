import React from "react";

export default function UserPersonalInfo({
  userDataInfo,
  onPersonalDataChange,
}) {
  const [newUserData, setNewUserData] = React.useState(userDataInfo);
  function handleSaveChanges() {
    onPersonalDataChange(newUserData);
  }
  return (
    <div className="card text-center w-100">
      <div className="card-header fs-4 fw-semibold text-start">
        Personal Information
      </div>

      <div className="card-body">
        <div className="name row g-3 ">
          <div className="col-12 col-md-6">
            <label htmlFor="firstName" className="form-label text-start w-100">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="form-control p-3 border"
              id="firstName"
              value={newUserData.firstName}
              onChange={(e) => {
                setNewUserData({ ...newUserData, firstName: e.target.value });
              }}
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="lastName" className="form-label text-start w-100">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control p-3"
              id="lastName"
              value={newUserData.lastName}
              onChange={(e) => {
                setNewUserData({ ...newUserData, lastName: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="jobTitle" className="form-label text-start w-100">
            Job Title
          </label>
          <input
            type="text"
            className="form-control p-3"
            id="jobTitle"
            name="jobTitle"
            value={newUserData.jobTitle}
            onChange={(e) => {
              setNewUserData({ ...newUserData, jobTitle: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="card-footer text-body-secondary text-end">
        <button
          className="save-changes-btn btn custom-btn-primary fs-4 fw-medium px-3 py-2 "
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
