import React from 'react'
import { Link } from 'react-router-dom'

function PostItem({post, username, userId}) {
  
  const profileLink = userId ? `/profile/${userId}` : `/profile/${post?.user?._id}`;
  
  return (
    <div>
      <div className="post-item">
        <div className="post-item-image-wrapper">
          <img src={post?.image.url} alt="" className="post-item-image" />
        </div>
        <div className="post-item-info-wrapper">
          <div className="post-item-info">
            <div className="post-item-author">
              <strong>Author: </strong>
              <Link to={profileLink} className="post-item-username">
                {username ? username : post?.user.username}
              </Link>
            </div>
            <div className="post-item-date">
              {new Date(post?.createdAt).toDateString()}
            </div>
          </div>
          <div className="post-item-details">
            <h4 className="post-item-title">{post?.title}</h4>
            <Link
              to={`/posts/categories/${post?.category}`}
              className="post-item-category"
            >
              {post?.category}
            </Link>
          </div>
          <p className="post-item-description">
            {post?.description}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. spernatur,
            asperiores quam iure tenetur,autem fugiat deserunt dolores dicta eum
            pariaturdolor voluptate consequuntur dolore eveniet eaque nobis
            exercitationem placeat delectus. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. spernatur, asperiores quam iure
            tenetur,autem fugiat deserunt dolores dicta eum pariaturdolor
            voluptate consequuntur dolore eveniet eaque nobis exercitationem
            placeat delectus.
          </p>
          <Link to={`/post/details/${post?._id}`} className="post-item-link">
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostItem
