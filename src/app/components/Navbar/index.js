'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { animateScroll as scroll } from 'react-scroll'
// import SlickNav from '../SlickNav'

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [navbarClass, setNavbarClass] = useState('')
  const [sticky, setSticky] = useState('')

  useEffect(() => {
    function handleScroll () {
      setScrollPosition(window.scrollY)
      if (scrollPosition > 70) {
        setNavbarClass('navbar-fixed')
      } else {
        setNavbarClass('')
      }
      if (scrollPosition > 50) {
        setSticky('open')
      } else {
        setSticky('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollPosition])

  const handleClick = (event) => {
    event.preventDefault()
    const target = event.target.getAttribute('data-targets')
    scroll.scrollTo(target)
  }

  return (
    <>
      <button
        className={`atf-scroll-top atf-back-to-top ${sticky}`}
        data-targets={0}
        onClick={handleClick}
      >
        <i className='fas fa-long-arrow-alt-up atf-scrollup-icon' />
      </button>

      <div id='navigation' className={`fixed-top navbar-light bg-faded site-navigation ${navbarClass}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2 col-md-3 col-sm-4'>
              <div className='site-logo'>
                <Link href='/'><Image src='/logo.png' alt='SVabogados Logo' width={72} height={16} /></Link>
              </div>
            </div>

            <div className='col-lg-10 col-md-9 col-sm-8 '>
              <div className='header_right '>
                <nav id='main-menu' className='ms-auto'>
                  <ul>
                    <li><a href='#home'>Inicio</a></li>
                    <li><a href='#about'>Conócenos mejor</a></li>
                    <li><a href='#service'>Servicios</a></li>
                    <li><a href='#contact'>Contacto</a></li>
                    {/* <li><a href='#pricing'>Pricing</a></li> */}
                  </ul>
                </nav>
                {/* <div id='mobile_menu' /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
