import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'

export default function Home({ data }) {
  return (
    <Layout headerText="Welcome to my Gatsby Site">
      {<h1>{Object.keys(data.allWpPost.edges).length} Posts</h1>}
      {data.allWpPost.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={`/${node.slug}`}>
            <h3>{node.title}</h3>
            {node.title} <strong>— {node.date}</strong>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
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
