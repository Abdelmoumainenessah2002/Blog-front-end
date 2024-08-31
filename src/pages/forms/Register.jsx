import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './forms.css'
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/apiCalls/authApiCall";


const Register = () => {
  const dispatch = useDispatch();
  const { registerMessage } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Form submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "") return toast.error("Username cannot be empty");
    if (email.trim() === "") return toast.error("Email cannot be empty");
    if (password.trim() === "") return toast.error("Password cannot be empty");

    dispatch(registerUser({ username, email, password }));
  };

  // First useEffect: Check if registerMessage is not null
  useEffect(() => {
    if (registerMessage) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: registerMessage,
        showConfirmButton: true, // Confirmation button will be shown
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  }, [registerMessage, navigate]);
  return (
    <div>
      <section className="form-container">
        <div className="form-title">Create New Account</div>
        <form onSubmit={formSubmitHandler} className="form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-input"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-input"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="form-btn">
            Register
          </button>
        </form>
        <div className="form-footer">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </section>
    </div>
  );
};

export default Register;
