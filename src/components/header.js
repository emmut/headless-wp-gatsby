import React from 'react'
import headerStyles from '../styles/header.module.scss'
import { Link } from 'gatsby'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Header(props) {
  return (
    <>
      <header className={headerStyles.header}>
        <img
          className={headerStyles.header__img}
          src="https://source.unsplash.com/random/1500x800"
          alt=""
        />
        <div class={headerStyles.siteNav}>
          <Link to="/">
            <h3 className={headerStyles.header__logotype}>MySweetSite</h3>
          </Link>
          <nav className="links">
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/contact">Contact</ListLink>
            <ListLink to="/about-css-modules">Modules</ListLink>
          </nav>
        </div>
      </header>
      <h1>{props.headerText}</h1>
    </>
  )
}
