import React, {useEffect} from "react";
import AdminSidebar from "./AdminSidebar";
import "./admin-table.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getAllPosts } from "../../redux/apiCalls/postsApiCall";

function PostsTable() {

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);


  useEffect(() => {
    dispatch(getAllPosts());
  } , [dispatch]);

  // Delete User handler
  const deletePostHandler = (postId) => {
    Swal.fire({
      title: "Are you sure you want to delete this post?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePost(postId));
      }
    });
  };

  return (
    <div>
      <section className="table-container">
        <AdminSidebar />
        <div className="table-wrapper">
          <h1 className="table-title">Posts</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Count</th>
                <th>User</th>
                <th>Post Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="table-image">
                      <img
                        src={item.user.profilePhoto?.url}
                        alt=""
                        className="table-user-image"
                      />
                      <span className="table-username">{item.user.username}</span>
                    </div>
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <div className="table-button-group">
                      <button>
                        <Link to={`/post/details/${item._id}`}>View Post</Link>
                      </button>
                      <button onClick={() => deletePostHandler(item._id)}>Delete Post</button>
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

export default PostsTable;
