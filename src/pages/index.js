import React from "react"
import { Link } from "gatsby"
import Container from "../components/Container"

export default function Home() {
  return (
    <Container headerText="Welcome to my Gatsby Site">
      <Link to="/contact/">Contact</Link>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
    </Container>
  )
}
