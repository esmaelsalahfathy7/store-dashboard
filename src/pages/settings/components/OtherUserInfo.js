import React from "react";
import UserPersonalInfo from "./UserPersonalInfo";
import UserUpdatePassword from "./UserUpdatePassword";

export default function OtherUserInfo() {
  return (
    <div className="d-flex flex-column gap-3">
      <UserPersonalInfo />
      <UserUpdatePassword />
    </div>
  );
}
