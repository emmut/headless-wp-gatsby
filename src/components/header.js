import React from 'react'
import headerStyles from '../styles/header.module.scss'
import { graphql, useStaticQuery, Link } from 'gatsby'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Header(props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <>
      <header className={headerStyles.header}>
        <img
          className={headerStyles.header__img}
          src="https://source.unsplash.com/random/1500x800"
          alt=""
        />
        <div className={headerStyles.siteNav}>
          <Link to="/">
            <h3 className={headerStyles.header__logotype}>
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <nav className="links">
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/contact">Contact</ListLink>
            <ListLink to="/about-css-modules">Modules</ListLink>
            <ListLink to="/my-files">Files</ListLink>
          </nav>
        </div>
      </header>
      <h1>{props.headerText}</h1>
    </>
  )
}
