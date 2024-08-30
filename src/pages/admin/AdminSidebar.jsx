import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <Link to="/admin-dashbord" className="admin-sidebar-title">
        <i className="bi bi-columns"></i>Dashbord
      </Link>
      <ul className="admin-dashbord-list">
        <Link className="admin-sidebar-link" to="/admin-dashbord/users-table">
          <i className="bi bi-person"></i> Users
        </Link>
        <Link className="admin-sidebar-link" to="/admin-dashbord/posts-table">
          <i className="bi bi-file-post"></i> Posts
        </Link>
        <Link className="admin-sidebar-link" to="/admin-dashbord/categories-table">
          <i className="bi bi-tag-fill"></i> Categories
        </Link>
        <Link className="admin-sidebar-link" to="/admin-dashbord/comments-table">
          <i className="bi bi-chat-left-text"></i> Comments
        </Link>
      </ul>
    </div>
  );
}

export default AdminSidebar;
