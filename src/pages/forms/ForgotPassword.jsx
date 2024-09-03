import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {useDispatch} from "react-redux";
import { forgotPassword } from "../../redux/apiCalls/passwordApiCall";

const ForgotPassword = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  // form submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("Email cannot be empety");

    dispatch(forgotPassword(email));
  };

  return (
    <div>
      <section className="form-container">
        <div className="form-title">Reset your password now!</div>
        <form onSubmit={formSubmitHandler} className="form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="form-btn">
            Send Email
          </button>
        </form>
        <div className="form-footer">
          Back To <Link to="/login">Login</Link>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
