import React, { useEffect } from "react";
import "./category.css";
import { useParams, Link } from "react-router-dom";
import PostList from "../../components/posts/PostList";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsBasedOnCategory } from "../../redux/apiCalls/postsApiCall";

function Category() {
  // Dispatch function
  const dispatch = useDispatch();

  // selector function
  const { postsCate } = useSelector((state) => state.post);

  // Get posts from the link
  const { category } = useParams();


  // move to the top of the page
  useEffect(() => {
    dispatch(fetchPostsBasedOnCategory(category));
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div>
      <section className="category">
        {postsCate.length === 0 ? (
          <div className="no-posts">
            <h2>
              No posts with <span>{category}</span> category!!
            </h2>
            <Link to="/" className="btn">
              Go back to home
            </Link>
          </div>
        ) : (
          <PostList posts={postsCate} />
        )}
      </section>
    </div>
  );
}

export default Category;
