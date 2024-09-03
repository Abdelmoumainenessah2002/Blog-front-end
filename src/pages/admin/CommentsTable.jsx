import React, { useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import "./admin-table.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, fetchAllComments } from "../../redux/apiCalls/commentApiCall";

function CommentsTable() {

  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comment);

  // Fetch all comments
  useEffect(() => {
    dispatch(fetchAllComments());
  } , [dispatch]);

  // Delete User handler
  const deleteCommentHandler = (commentId) => {
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
        dispatch(deleteComment(commentId));
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
              {comments.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="table-image">
                      <img
                        src={item.user.profilePicture?.url}
                        alt=""
                        className="table-user-image"
                      />
                      <span className="table-username">{item.username}</span>
                    </div>
                  </td>
                  <td>{item.text}</td>
                  <td>
                    <div className="table-button-group">
                      <button>
                        <Link to={`/post/details/${item.postId._id}`}>View Post</Link>
                      </button>
                      <button onClick={() => deleteCommentHandler(item._id)}>
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
