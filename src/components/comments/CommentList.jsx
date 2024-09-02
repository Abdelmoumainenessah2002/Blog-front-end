import React, { useState } from "react";
import "./comment-list.css";
import Swal from 'sweetalert2'
import UpdateCommentModel from "./UpdateCommentModel";
import Moment from 'react-moment';
import { useDispatch, useSelector } from "react-redux";


function CommentList({comments}) {

  // redux states
  const { user } = useSelector((state) => state.auth);

  // react states
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
      <h4 className="comment-list-count">{comments?.length} comments</h4>
      {comments?.map((comment) => (
        <div key={comment._id} className="comment-item">
          <div className="comment-item-info">
            <div className="comment-item-username">{comment.username}</div>
            <div className="comment-item-time">
              <Moment fromNow ago>
                {comment.createdAt}
              </Moment>{" "}
              ago
            </div>
          </div>
          <p className="comment-item-text">{comment.text}</p>
          {user && user._id === comment.user && (
            <div className="comment-item-icon-wrapper">
              <i
                onClick={() => setUpdateComment(true)}
                className="bi bi-pencil-square"
              ></i>
              <i
                onClick={deleteCommentHandler}
                className="bi bi-trash-fill"
              ></i>
            </div>
          )}
        </div>
      ))}
      {updateComment && (
        <UpdateCommentModel setUpdateComment={setUpdateComment} />
      )}
    </div>
  );
}

export default CommentList;
