import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'

export default function Home({ data }) {
  return (
    <Layout headerText="Welcome to my Gatsby Site">
      {<h1>{Object.keys(data.allWpPost.edges).length} Posts</h1>}
      {data.allWpPost.edges.map(post => (
        <div key={post.node.id}>
          {console.log(post.node)}
          <Link to={post.node.slug}>
            <h3>{post.node.title}</h3>
            {post.node.title} <strong>— {post.node.date}</strong>
            <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          slug
          title
          excerpt
          date
          id
        }
      }
    }
  }
`
