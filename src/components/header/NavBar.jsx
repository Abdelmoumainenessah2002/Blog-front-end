import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({toggle, setToggle}) => {
  return (
    <nav
      style={{
        clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
      className="navbar"
    >
      <ul className="nav-links">
        <Link to="/" onClick={() => setToggle(false)} className="nav-link">
          <i className="bi bi-house"></i> Home
        </Link>
        <Link to="/posts" onClick={() => setToggle(false)} className="nav-link">
          <i className="bi bi-stickies"></i> Posts
        </Link>
        <Link to="create-post" onClick={() => setToggle(false)} className="nav-link">
          <i className="bi bi-journal-plus"></i> Create
        </Link>
        <Link to="admin-dashbord" onClick={() => setToggle(false)} className="nav-link">
          <i className="bi bi-person-check"></i> Admin Dashbord
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;