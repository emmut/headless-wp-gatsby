import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

const title = 'Pulling content from WP'

export const PortfolioItem = ({ data }) => {
  return (
    <div className="portfolioItem">
      <h1 dangerouslySetInnerHTML={{ __html: data.node.title }} />
      <div dangerouslySetInnerHTML={{ __html: data.node.content }} />
    </div>
  )
}
export default function Test({ data }) {
  return (
    <Layout headerText={title}>
      <SEO title={title} />
      {data.allWpPortfolio.edges.map((node, key) => (
        <PortfolioItem key={key} data={node} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query PortfolioQuery {
    allWpPortfolio(sort: { fields: date, order: DESC }) {
      edges {
        node {
          content
          title
        }
      }
    }
  }
`
