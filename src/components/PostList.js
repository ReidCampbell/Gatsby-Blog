import React from "react"

import styles from "../css/postlist.module.css"
import PostCard from "./PostCard"

const PostList = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>Philip Schofield</h1>
      <h4>Personal blog</h4>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <PostCard key={index} post={node} />
        })}
      </div>
    </section>
  )
}

export default PostList
