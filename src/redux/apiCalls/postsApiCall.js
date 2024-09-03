import { postActions } from "../slices/postSlice";
import request from "../../utils/constants";
import { toast } from "react-toastify";

// fetch posts based on page number
export function fetchPosts(pageNumber) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts?pageNumber=${pageNumber}`);
      dispatch(postActions.setPosts(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// fetch posts count
export function getPostsCount() {
  return async (dispatch) => {
    try {
      const { data } = await request.get("/api/posts/count");
      dispatch(postActions.setPostsCount(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// fetch posts based on category
export function fetchPostsBasedOnCategory(category) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts?category=${category}`);
      dispatch(postActions.setPostsCate(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// create new post
export function createPost(newPost) {
  return async (dispatch, getState) => {
    try {
      dispatch(postActions.setLoading()); // set loading to true
      await request.post(`/api/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${getState().auth.user.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(postActions.setIsPostCreated()); // set isPostCreated to true
      setTimeout(() => {
        dispatch(postActions.clearIsPostCreated());
      }, 2000); // clear the isPostCreated state after 2 seconds
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(postActions.clearLoading()); // clear loading
    }
  };
}



// fetch single post
export function fetchSinglePost(PostId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts/${PostId}`);
      dispatch(postActions.setPost(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}


// Toggle like post
export function toggleLikePost(PostId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.put(`/api/posts/like/${PostId}`, {}, {
        headers: {
          Authorization: `Bearer ${getState().auth.user.token}`,
        },
      });
      dispatch(postActions.setLike(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}


// Update post image
export function updatePostImage(newImage, PostId) {
  return async (dispatch, getState) => {
    try {
      await request.put(`/api/posts/update-image/${PostId}`, newImage , {
        headers: {
          Authorization: `Bearer ${getState().auth.user.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      
      toast.success("New post image updated successfully!");

    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}


// Update post 
export function updatePost(newPost, PostId) {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.put(`/api/posts/${PostId}`, newPost , {
                headers: {
                    Authorization: `Bearer ${getState().auth.user.token}`,
                },
            });

      
      dispatch(postActions.setPost(data)); // set isPostCreated to true

    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Delete post
export function deletePost(PostId) {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.delete(`/api/posts/${PostId}`, {
                headers: {
                    Authorization: `Bearer ${getState().auth.user.token}`,
                },
            });
      
      dispatch(postActions.deletePost(data.postId)); // set isPostCreated to true
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// fetch All posts 
export function getAllPosts() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/posts`);
      dispatch(postActions.setPosts(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

