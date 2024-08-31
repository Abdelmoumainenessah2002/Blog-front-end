import React, { useState } from "react";
import "./comment-list.css";
import Swal from 'sweetalert2'
import UpdateCommentModel from "./UpdateCommentModel";
function CommentList() {

  const [updateComment, setUpdateComment] = useState(false)
  // Delete Comment handler
  const deleteCommentHandler = () => {
    Swal.fire({
      title: "Are you sure?",
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
          text: "post has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="comment-list">
      <h4 className="comment-list-count">2 comments</h4>
      {[1, 2].map((comment) => (
        <div key={comment} className="comment-item">
          <div className="comment-item-info">
            <div className="comment-item-username">Momne Nessah</div>
            <div className="comment-item-time">2 hours ago</div>
          </div>
          <p className="comment-item-text">
            Hello this is commentHello this is comment
          </p>
          <div className="comment-item-icon-wrapper">
            <i
              onClick={() => setUpdateComment(true)}
              className="bi bi-pencil-square"
            ></i>
            <i onClick={deleteCommentHandler} className="bi bi-trash-fill"></i>
          </div>
        </div>
      ))}
      {updateComment && (
        <UpdateCommentModel
          setUpdateComment={setUpdateComment}
        />
      )}
    </div>
  );
}

export default CommentList;
