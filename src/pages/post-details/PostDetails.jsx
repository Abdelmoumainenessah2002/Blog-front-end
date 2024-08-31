import { Link, useParams } from "react-router-dom";
import { posts } from "../../dummyData";
import "./post-details.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddComment from "../../components/comments/AddComment";
import CommentList from "../../components/comments/CommentList";
import Swal from "sweetalert2";
import UpdatePostModel from "./UpdatePostModel";


const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find((post) => post._id === parseInt(id));

  const [file, setFile] = useState(null);
  const [updatePost, setUpdatePost] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const updateImageSubmitHandler = (e) => {
    e.preventDefault();
    if (!file) return toast.error("there is no file uploaded!");

    console.log("Image Updated");
  };

  // Delete post handler
  const deletePostHandler = () => {
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
  }

  return (
    <section className="post-details">
      <div className="post-details-image-wrapper">
        <img
          src={file ? URL.createObjectURL(file) : post.image}
          alt=""
          className="post-details-image"
        />
        <form
          className="update-post-image-form"
          onSubmit={updateImageSubmitHandler}
        >
          <label htmlFor="file" className="update-post-label">
            <i className="bi bi-image-fill"></i>
            Select New Image
          </label>
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="submit">Upload</button>
        </form>
      </div>
      <h1 className="post-details-title">{post.title}</h1>
      <div className="post-details-user-info">
        <img
          src={post.user.image}
          alt={`${post.user.username} avatar`}
          className="post-details-user-image"
        />
        <div className="post-details-user">
          <strong>
            <Link to={`/profile/1`}>{post.user.username}</Link>
          </strong>
          <span>{post.createdAt}</span>
        </div>
      </div>
      <p className="post-details-description">
        {post.description} Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Incidunt consequuntur quae rerum eum sapiente nihil quam. Autem
        esse corporis dolore ab id, necessitatibus tempore, commodi, magnam
        soluta quas numquam quam.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Incidunt consequuntur quae rerum eum sapiente nihil
        quam. Autem esse corporis dolore ab id, necessitatibus tempore, commodi,
        magnam soluta quas numquam quam.
      </p>
      <div className="post-details-icon-wrapper">
        <div className="">
          <i className="bi bi-hand-thumbs-up"></i>
          <small>{post.likes.length} likes</small>
        </div>
        <div className="">
          <i
            onClick={() => setUpdatePost(true)}
            className="bi bi-pencil-square"
          ></i>
          <i onClick={deletePostHandler} className="bi bi-trash-fill"></i>
        </div>
      </div>
      <AddComment />
      <CommentList />
      {updatePost && <UpdatePostModel post={post} setUpdatePost={setUpdatePost} />}
    </section>
  );
};

export default PostDetails;
