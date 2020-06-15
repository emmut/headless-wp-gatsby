import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'

export default function MyFiles({ data }) {
  console.log(data)
  return (
    <Container>
      <h1>My Site's Files</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.prettySize}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          extension
          prettySize
          id
          birthTime(fromNow: true)
        }
      }
    }
  }
`
