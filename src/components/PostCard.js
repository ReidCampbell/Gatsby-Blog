import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

import styles from "../css/postcard.module.css"

const PostCard = ({ post }) => {
  const { title, date, author, slug } = post.frontmatter

  const img = post.frontmatter.image.childImageSharp.fluid

  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image fluid={img} />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <h6>
          <span>by {author}</span> /<span>{date}</span>
        </h6>
        <p>{post.excerpt}</p>
        <Link to={slug} className={styles.link}>
          Read More
        </Link>
      </div>
    </article>
  )
}

export default PostCard
