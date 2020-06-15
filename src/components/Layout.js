import React from 'react'
import containerStyles from '../styles/container.module.scss'
import Header from './Header'

export default function Layout({ children, headerText }) {
  return (
    <div className={containerStyles.container}>
      <Header headerText={headerText} />
      <div className={containerStyles.pageContent}>{children}</div>
    </div>
  )
}
