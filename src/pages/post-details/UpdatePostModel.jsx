import React, { useState } from "react";
import "./update-post.css";
import { toast } from "react-toastify";

function UpdatePostModel({ post, setUpdatePost }) {
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [category, setCategory] = useState(post.category);


   const formSubmitHandler = (e) => {
     e.preventDefault();

     // validation
     if (title.trim() === "") return toast.error("Post Title is required");
     if (description.trim() === "") return toast.error("Post Description is required");
     if (category.trim() === "") return toast.error("Post Category is required");

     console.log({ title, description, category });
   }  

  return (
    <div className="update-post">
      <form onSubmit={formSubmitHandler} className="update-post-form">
        <abbr title="close">
          <i
            onClick={() => setUpdatePost(false)}
            className="bi bi-x-circle-fill update-post-form-close"
          ></i>
        </abbr>
        <h1 className="update-post-title">Update post</h1>
        <input
          type="text"
          className="update-post-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="update-post-input"
        >
          <option value="" hidden>
            Select A Category
          </option>
          <option value="music">music</option>
          <option value="traveling">traveling</option>
          <option value="traveling">sport</option>
        </select>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          className="update-post-textarea"
        ></textarea>
        <button type="submit" className="update-post-btn">
          Update Post
        </button>
      </form>
    </div>
  );
}

export default UpdatePostModel;
