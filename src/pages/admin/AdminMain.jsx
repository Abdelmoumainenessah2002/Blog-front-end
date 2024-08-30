import React from "react";
import { Link } from "react-router-dom";
import AddCategoryForm from "./AddCategoryForm";

function AdminMain() {
  return (
    <div className="admin-main">
      <div className="admin-main-header">
        <div className="admin-main-card">
          <h5 className="admin-card-title">Users</h5>
          <div className="admin-card-count">120</div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashbord/users-table" className="admin-card-link">
              See All Users
            </Link>
            <div className="admin-card-icon">
              <i className="bi bi-person"></i>
            </div>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-card-title">Posts</h5>
          <div className="admin-card-count">350</div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashbord/posts-table" className="admin-card-link">
              See All Posts
            </Link>
            <div className="admin-card-icon">
              <i className="bi bi-file-post"></i>
            </div>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-card-title">Categories</h5>
          <div className="admin-card-count">18</div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashbord/categories-table" className="admin-card-link">
              See All Categories
            </Link>
            <div className="admin-card-icon">
              <i className="bi bi-tag-fill"></i>
            </div>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-card-title">Comments</h5>
          <div className="admin-card-count">530</div>
          <div className="admin-card-link-wrapper">
            <Link to="/admin-dashbord/comments-table" className="admin-card-link">
              See All Comments
            </Link>
            <div className="admin-card-icon">
              <i className="bi bi-chat-left-text"></i>
            </div>
          </div>
        </div>
      </div>
      <AddCategoryForm />

    </div>
  );
}

export default AdminMain;
