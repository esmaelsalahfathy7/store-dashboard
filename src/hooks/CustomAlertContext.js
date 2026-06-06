import React from "react";
import { useState, createContext, useContext } from "react";
import "./CustomAlertStyle.css";
const ShowAlertContext = createContext({ show: false, message: "" });

export default function CustomAlertProvider({ children }) {
  const [showAlert, setShowAlert] = useState({ show: false, message: "" });

  function setAlert(message) {
    setShowAlert({ show: true, message });
    setTimeout(() => {
      setShowAlert((prev) => ({ ...prev, show: false }));
    }, 3000);
  }

  return (
    <ShowAlertContext.Provider value={{ showAlert, setAlert }}>
      <div
        className={`alert alert-primary position-fixed bottom-0 end-0 opacity-0 d-none ${showAlert.show ? "show" : ""}`}
        role="alert"
      >
        {showAlert.message}
      </div>

      {children}
    </ShowAlertContext.Provider>
  );
}

export const useShowAlert = () => {
  const context = useContext(ShowAlertContext);
  if (context === undefined) {
    throw new Error("useShowAlert must be used within a ShowAlertProvider");
  }
  return context;
};
