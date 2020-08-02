import React from 'react'
import Layout from '../components/Layout'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export default function Contact() {
  return (
    <Layout headerText="Portfolio">
      <Query
        query={gql`
          query MyQuery {
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
        `}
      >
        {({ loading, error, data }) => {
          console.log(data)

          return <p>Test</p>
        }}
      </Query>
    </Layout>
  )
}
