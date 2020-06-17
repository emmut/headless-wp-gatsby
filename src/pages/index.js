import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'

export default function Home({ data }) {
  return (
    <Layout headerText="Welcome to my Gatsby Site">
      <h1>{data.allMarkdownRemark.totalCount} Posts</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            {node.frontmatter.title} <strong>— {node.frontmatter.date}</strong>
            <p>{node.excerpt}</p>
          </Link>
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
