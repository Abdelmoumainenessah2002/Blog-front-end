import React from 'react'
import "./posts.css"
import PostItem from './PostItem'
function PostList({posts}) {
  return (
    <div>
      <div className="post-list">
        {posts.map((post) => <PostItem key={post._id} post={post} />)}
      </div>
    </div>
  )
}

export default PostList
