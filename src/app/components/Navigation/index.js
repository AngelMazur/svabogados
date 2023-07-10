import React from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link href='/'>Home</Link>
      <Link href='/postPageNext13'>Post</Link>
    </nav>
  )
}

export default Navigation
