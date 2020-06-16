import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default function Home({ data }) {
  return (
    <Layout headerText="Welcome to my Gatsby Site">
      <h1>{data.allMarkdownRemark.totalCount} Posts</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <>
            <h3>{node.frontmatter.title}</h3>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
