import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

export default function BlogPost({ data }) {
  console.log(data)
  const post = data.wpPost
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
    wpPost(slug: { eq: $slug }) {
      title
      content
      excerpt
    }
  }
`
