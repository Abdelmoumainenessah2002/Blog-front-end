import React, { useEffect } from 'react'
import "./category.css"
import { useParams } from 'react-router-dom'
import PostList from '../../components/posts/PostList'
import {posts} from '../../dummyData'

function Category() {
    const { category } = useParams();

    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

  return (
    <div>
      <section className="category">
        <h1 className="category-title">Posts Based On {category}</h1>
        <PostList posts={posts} />
      </section>
    </div>
  )
}

export default Category
