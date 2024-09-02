import React, { useState } from "react";
import "./update-comment.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateComment } from "../../redux/apiCalls/commentApiCall";

function UpdateCommentModel({ commentForUpdate, setUpdateComment}) {

  const dispatch = useDispatch();

  const [text, setText] = useState(commentForUpdate?.text);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // validation
    if (text.trim() === "") return toast.error("Comment should be not empty");
    
    // update comment
    dispatch(updateComment(commentForUpdate?._id, { text }));
    setUpdateComment(false);
  };

  return (
    <div className="update-comment">
      <form onSubmit={formSubmitHandler} className="update-comment-form">
        <abbr title="close">
          <i
            onClick={() => setUpdateComment(false)}
            className="bi bi-x-circle-fill update-comment-form-close"
          ></i>
        </abbr>
        <h1 className="update-comment-title">Update comment</h1>
        <input
          type="text"
          className="update-comment-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="update-comment-btn">
          Edit Comment
        </button>
      </form>
    </div>
  );
}

export default UpdateCommentModel;
