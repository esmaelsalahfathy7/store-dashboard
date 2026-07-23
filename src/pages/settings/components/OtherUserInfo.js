import React, { useState } from "react";
import UserPersonalInfo from "./UserPersonalInfo";
import UserUpdatePassword from "./UserUpdatePassword";

export default function OtherUserInfo() {
  const [userDataInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user")),
  );
  function handlePersonalDataChange(newUserData) {
    setUserInfo(newUserData);
    localStorage.setItem("user", JSON.stringify(newUserData));
  }
  function handlePasswordChange(updatedPassword) {
    setUserInfo((prevUserDataInfo) => ({
      ...prevUserDataInfo,
      password: updatedPassword,
    }));
    localStorage.setItem(
      "user",
      JSON.stringify({ ...userDataInfo, password: updatedPassword }),
    );
  }
  return (
    <div className="d-flex flex-column gap-3">
      <UserPersonalInfo
        userDataInfo={userDataInfo}
        onPersonalDataChange={handlePersonalDataChange}
      />
      <UserUpdatePassword
        currentPassword={userDataInfo.password}
        onPasswordChange={handlePasswordChange}
      />
    </div>
  );
}
