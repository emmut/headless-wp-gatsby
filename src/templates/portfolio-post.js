import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

export default function PortfolioPost({ data }) {
  const post = data.wpPortfolio
  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    wpPortfolio(slug: { eq: $slug }) {
      title
      content
      excerpt
    }
  }
`
