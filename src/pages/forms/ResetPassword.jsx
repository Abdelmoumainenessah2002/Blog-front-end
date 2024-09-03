import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./forms.css";
import { getResetPassword, resetPassword } from "../../redux/apiCalls/passwordApiCall";

const ResetPassword = () => {

  const dispatch = useDispatch();
  const { isError } = useSelector((state) => state.password);

  const [password, setPassword] = useState("");

  const {userId, token} = useParams();

  useEffect(() => {
    dispatch(getResetPassword(userId, token));
  } , [dispatch, userId, token]);

  // form submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (password.trim() === "") return toast.error("New password cannot be empety");

    dispatch(resetPassword(password, {userId, token}));
  };

  return (
    <div>
      <section className="form-container">
        {isError ? (
          <h1 className="reset-password-not-found">Not Found!!</h1>
        ) : (
          <>
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
          </>
        )}
      </section>
    </div>
  );
};

export default ResetPassword;
