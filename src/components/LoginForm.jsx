import React from "react";
import "../styles/LoginForm.css";
import medlogo from "../pics/medlogo.png"; // Import the logo file

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={medlogo} alt="iMediX Logo" className="login-logo" />
      </div>
      <h1>Welcome to iMediX</h1>
      <form className="login-form">
        <input type="text" placeholder="Username/Email-ID/Phone Number" required />
        <input type="password" placeholder="Password" required />
        <input type="text" placeholder="Enter Captcha - Case Sensitive" required />
        <button type="submit">LOGIN</button>
        <div className="patient-options">
          <button className="forgot-password">Forgot Password</button>
          <button className="login-otp">LOGIN WITH OTP</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
