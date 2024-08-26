import React from 'react';

const HeaderRight = () => {
  return (
    <div className="header-right">
      <button className="header-right-link">
        <i className="bi bi-box-arrow-in-right"></i>
        <span className="">Login</span>
      </button>
      <button className="header-right-link">
        <i className="bi bi-person-plus"></i>
        <span className="">Register</span>
      </button>
    </div>
  );
};

export default HeaderRight;