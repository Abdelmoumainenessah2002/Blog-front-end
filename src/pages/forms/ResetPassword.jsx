import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const ResetPassword = () => {

  const [password, setPassword] = useState("");

  // form submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (password.trim() === "") return toast.error("New password cannot be empety");

    console.log({  password });
  };

  return (
    <div>
      <section className="form-container">
        <div className="form-title">Reset password</div>
        <form onSubmit={formSubmitHandler} className="form">
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-input"
              id="password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="form-btn">
            Reset Password
          </button>
        </form>
      </section>
    </div>
  );
};

export default ResetPassword;
