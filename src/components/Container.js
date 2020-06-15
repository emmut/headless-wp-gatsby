import React from 'react'
import containerStyles from './container.module.scss'
import Header from './header'

export default function Container({ children, headerText }) {
  return (
    <div className={containerStyles.container}>
      <Header headerText={headerText} />
      <div className={containerStyles.pageContent}>{children}</div>
    </div>
  )
}
