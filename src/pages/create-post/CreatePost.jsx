import React, { useState } from "react";
import { toast } from "react-toastify";
import "./create-post.css";

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  // form submit handler
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    // validation 
    if (title.trim()=== "") return toast.error("Post Title is required");
    if (description.trim()=== "") return toast.error("Post Description is required");
    if (category.trim()=== "") return toast.error("Post Category is required");
    if (!file) return toast.error("Post Image is required");

    // create form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", file);

    // @TODO - send data to the server

    console.log({title,category, description, file});
    
  }

  return (
    <section className="create-post">
      <h1 className="create-post-title">Create New Post</h1>
      <form className="create-post-form" onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="text Title"
          className="create-post-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="create-post-input"
        >
          <option disabled hidden value="">
            Select a Category
          </option>
          <option value="life">Life</option>
          <option value="music">Music</option>
          <option value="sport">Sport</option>
        </select>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          className="create-post-textarea"
          placeholder="Post description"
        ></textarea>
        <input
          type="file"
          name="file"
          id="file"
          className="create-post-upload"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" className="create-post-btn">
          Publish
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
