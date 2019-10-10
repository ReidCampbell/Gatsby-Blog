import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PostList from "../components/PostList"
// import Image from "../components/image"
// import SEO from "../components/seo"

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___title, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges

  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <PostList posts={posts} />
    </Layout>
  )
}
