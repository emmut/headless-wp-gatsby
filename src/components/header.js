import React from "react"
import containerStyles from "./container.module.scss"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <>
      <img
        className={containerStyles.header}
        src="https://source.unsplash.com/random/1500x800"
        alt=""
      />
      <h1>{props.headerText}</h1>
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about-css-modules">Modules</Link>
      </nav>
    </>
  )
}
