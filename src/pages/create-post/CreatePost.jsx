import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate } from "react-router-dom";
import "./create-post.css";
import { createPost } from "../../redux/apiCalls/postsApiCall";
import { ThreeDots } from "react-loader-spinner";
import { fetchCategories } from "../../redux/apiCalls/categotyApiCall";

const CreatePost = () => {

  // redux hooks 
  const dispatch = useDispatch();
  const {isPostCreated, loading} = useSelector((state) => state.post);
  const { categories } = useSelector((state) => state.category);

  // react router hook
  const navigate = useNavigate();

  // local state
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

    // dispatch create post action
    dispatch(createPost(formData));
  
  };

  useEffect(() => {
    if (isPostCreated) {
      navigate("/");
    }
  } , [isPostCreated, navigate]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
          {categories.map((category) => (
            <option key={category._id} value={category.title}>
              {category.title}
            </option>
          ))}
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
          {loading ? (
            <ThreeDots
              className="create-post-loader"
              visible={true}
              height="24"
              width="80"
              color="#778697"
              radius="9"
              ariaLabel="three-dots-loading"
            />
          ) : (
            "Publish"
          )}
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
