import React from 'react';
import { Link } from "react-router-dom";
const HeaderRight = () => {
  return (
    <div className="header-right">
      <Link to="/login" className="header-right-link">
        <i className="bi bi-box-arrow-in-right"></i>
        <span className="">Login</span>
      </Link>
      <Link to="/register" className="header-right-link">
        <i className="bi bi-person-plus"></i>
        <span className="">Register</span>
      </Link>
    </div>
  );
};

export default HeaderRight;