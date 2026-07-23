import React from "react";
import "./SettingsPage.css";
import UserBasicInfo from "./components/UserBasicInfo";
import OtherUserInfo from "./components/OtherUserInfo";

export default function SettingsPage() {
  return (
    <div className="settings row p-0 m-0 g-3 flex-column flex-lg-row">
      <div className="left col-12 col-lg-4">
        <UserBasicInfo />
      </div>
      <div className="right col-12 col-lg-8">
        <OtherUserInfo />
      </div>
    </div>
  );
}
