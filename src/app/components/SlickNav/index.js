'use client'
import React, { useState } from 'react'
// import '../../../styles/slick-nav.css'

const SlickNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <button onClick={toggleMenu}>Menu</button>
      <nav className={`mobile-nav ${isOpen ? 'open' : 'closed'}`}>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>
    </>
  )
}

export default SlickNav
