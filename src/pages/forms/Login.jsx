  import React from 'react';
  import { useState } from 'react';
  import { Link } from 'react-router-dom';
  import { toast } from 'react-toastify';
  import { useDispatch} from 'react-redux';
  import { loginUser } from '../../redux/apiCalls/AuthApiCall';

  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    // form submit handler
    const formSubmitHandler = (e) => {
      e.preventDefault();

      if (email.trim() === "") return toast.error("Email cannot be empety");
      if (password.trim() === "") return toast.error("Username cannot be empety");

      dispatch(loginUser({ email, password }));
    };

    return (
      <div>
        <section className="form-container">
          <div className="form-title">Login to your account</div>
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
              <div style={{marginTop: "10px"}}>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </div>
            <button type="submit" className="form-btn">
              Login
            </button>
          </form>
          <div className="form-footer">
            Don't have an account? <Link to="/register">Back To Register</Link>
          </div>
        </section>
      </div>
    );
  };


  export default Login;