import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div id='navigation' className='fixed-top navbar-light bg-faded site-navigation'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2 col-md-3 col-sm-4'>
            <div className='site-logo'>
              <Link href='/'><Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} /></Link>
            </div>
          </div>
          {/* <!--- END Col --> */}
          <div className='col-lg-10 col-md-9 col-sm-8 '>
            <div className='header_right '>
              <nav id='main-menu' className='ms-auto'>
                <ul>
                  <li><a href='#home'>Home <i className='fa fa-chevron-down ms-1 arrow-btn f-13' /></a>
                    <ul>
                      <li><a href='index.html'>Home Default</a></li>
                      <li><a href='index1.html'>Home Silder</a></li>
                    </ul>
                  </li>
                  <li><a href='#about'>About</a></li>
                  <li><a href='#service'>Service</a></li>
                  <li><a href='#contact'>Contact</a></li>
                  <li><a href='#team'>Attorney</a></li>
                  <li><a href='#portfolio'>Case Study</a></li>
                  <li><a href='#pricing'>Pricing</a></li>
                  <li><a href='#blog'>Blog</a></li>
                </ul>
              </nav>
              <div id='mobile_menu' />
            </div>
          </div>
          {/* <!--- END Col --> */}
        </div>
        {/* <!--- END ROW --> */}
      </div>
      {/* <!--- END CONTAINER --> */}
    </div>
  )
}

export default Navbar
