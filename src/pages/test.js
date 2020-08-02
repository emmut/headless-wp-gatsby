import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export const PortfolioItem = data => {
  console.log(data.node)
  return (
    <div className="portfolioItem">
      <h1>Test</h1>
      {/* <h2>{data.node.title}</h2> */}
      {/* <p>{data.node.content}</p> */}
    </div>
  )
}
export default function Test({ data }) {
  const [portfolio, setPortfolio] = useState(data.emmut.portfolios)

  useEffect(() => setPortfolio(data.emmut.portfolios))

  // console.log(portfolio)
  return (
    <Layout headerText="Testing">
      {portfolio.edges.map((node, key) => (
        <PortfolioItem key={key} data={node} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query PortfolioQuery {
    emmut {
      portfolios {
        edges {
          node {
            content
            title
          }
        }
      }
    }
  }
`
