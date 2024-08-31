import React from "react";
import "./add-comment.css";
import { useState } from "react";
import { toast } from "react-toastify";


function AddComment() {

  const [text, setText] = useState("");

  // form submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(text.trim() === "") return toast.error("please write something!")

    console.log({text})
    setText("")
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler} className="add-comment">
        <input
          type="text"
          placeholder="Add a comment"
          className="add-comment-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="add-comment-btn">
          Add Comment
        </button>
      </form>
    </div>
  );
}

export default AddComment;
