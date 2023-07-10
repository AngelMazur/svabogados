import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <section
      className='atf-header-area atf-align-items-details'
      id='home'
    >
      <Image
        alt='Banner'
        src='/Banner/3.jpg'
        fill
        sizes='100vw'
        style={{
          maxWidth: '100%'
        }}
      />
      <div className='container'>
        <div className='row justify-content-left'>
          <div className='col-xl-7 col-lg-6 col-12 atf-single-details text-left'>
            <h2 className='text-uppercase'>SV Abogados</h2>
            <h4 className='text-uppercase'>Asesoramiento cercano y de confianza</h4>
            <div className='atf-main-btn mt-5'>
              <a href='#contact' className='atf-themes-btn'>Obtener presupuesto <i className='fa fa-angle-right' /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
