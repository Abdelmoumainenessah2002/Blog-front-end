import React from "react";
import AdminSidebar from "./AdminSidebar";
import "./admin-table.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function CommentsTable() {
  // Delete User handler
  const deleteCommentHandler = () => {
    Swal.fire({
      title: "Are you sure you want to delete this comment?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Comment has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <section className="table-container">
        <AdminSidebar />
        <div className="table-wrapper">
          <h1 className="table-title">Comments</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Count</th>
                <th>User</th>
                <th>Comment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4,5].map((item) => (
                <tr key={item}>
                  <td>{item}</td>
                  <td>
                    <div className="table-image">
                      <img
                        src="/images/user-avatar.png"
                        alt=""
                        className="table-user-image"
                      />
                      <span className="table-username">
                        Momne Nessah
                      </span>
                    </div>
                  </td>
                  <td>Thank you for This post</td>
                  <td>
                    <div className="table-button-group">
                      <button>
                        <Link to={`/post/details/2`}>View Post</Link>
                      </button>
                      <button onClick={deleteCommentHandler}>
                        Delete Comment
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default CommentsTable;
