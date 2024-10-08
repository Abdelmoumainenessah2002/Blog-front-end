import React, { useEffect } from "react";
import "./verify-email.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifyEmail } from "../../redux/apiCalls/authApiCall";

function VerifyEmail() {
  const dispatch = useDispatch();

  const { isEmailVerified } = useSelector((state) => state.auth);
  const { userId, token } = useParams();

  useEffect(() => {
    dispatch(verifyEmail(userId, token));
  }, [userId, token, dispatch]);

  return (
    <section className="verify-email">
      {isEmailVerified ? (
        <>
          <i className="bi bi-patch-check verify-email-icon"></i>
          <h1 className="verify-email-title">Your Email Has Been Verified</h1>
          <Link to="/login" className="verify-email-link">
            Go to Login
          </Link>
        </>
      ) : (
        <>
          <h1 className="verify-email-not-found">
            Not Found
          </h1>
        </>
      )}
    </section>
  );
}

export default VerifyEmail;
