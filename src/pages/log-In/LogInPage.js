import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./LogInPage.css";
import { useAuth } from "../../Contexts/AuthContext";

export default function LogInPage() {
  const [user, setUser] = useState({
    email: "ismaelsalah56@gmail.com",
    password: "123321123",
    firstName: "Esmael",
    lasttName: "Salah",
  });
  const { LogIn, isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);
  function handleInputChange(e) {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    if (!user.email || !user.password) {
      alert("Please fill in all fields.");
      return;
    } else {
      if (
        user.email === "ismaelsalah56@gmail.com" &&
        user.password === "123321123"
      ) {
        alert("Logged in successfully!");
        LogIn(user);
        navigate("/");
      } else {
        alert("Invalid email or password.");
      }
    }
  }
  return (
    <div className="log-in position-absolute top-50 start-50 translate-middle shadow-lg p-4 rounded-4 border border-dark border-opacity-10">
      <div className="content text-center d-flex flex-column gap-2">
        <h1>
          {" "}
          <i className="bi bi-lightning-charge-fill text-light rounded-2 fs-3 me-2"></i>
          VoltFlow
        </h1>
        <h4>Welcome back</h4>
        <p className="fw-light">
          Enter your credentials to access your dashboard.
        </p>
      </div>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email-address" className="form-label fw-light">
            Email address
          </label>
          <div className="input-icon mb-3 position-relative">
            <span>
              <i className="bi bi-envelope top-50 position-absolute translate-middle-y"></i>
            </span>
            <input
              type="email"
              className="form-control width-100 rounded-2 border border-dark border-opacity-25 outline-none"
              id="email-address"
              aria-describedby="emailHelp"
              placeholder="example@gmail.com"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="form-label fw-light">
            Password
          </label>
          <div className="input-icon mb-3 position-relative">
            <span>
              <i className="bi bi-lock top-50 position-absolute translate-middle-y"></i>
            </span>
            <input
              type="password"
              className="form-control width-100 rounded-2 border border-dark border-opacity-25 outline-none"
              id="password"
              placeholder="----------"
              name="password"
              onChange={handleInputChange}
              value={user.password}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary p-2 flex-grow-1">
          Log In <AiOutlineArrowRight />
        </button>

        <hr />
        <div className="text-center">
          Secure portal for VoltFlow authorized personnel.
        </div>
      </form>
    </div>
  );
}
