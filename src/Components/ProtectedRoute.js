import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isLogged } = useAuth(); // Replace with actual authentication logic

  if (!isLogged) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
}
