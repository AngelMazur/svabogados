import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='atf-footer-area'>
      <div className='container'>
        <div className='row atf-section-padding'>
          <div className='col-lg-4 atf-footer-link wow fadeIn' data-wow-duration='1s' data-wow-delay='0.2s' data-wow-offset='0'>
            <div className='atf-footer-box'>
              <h5><a href=''> Nuestros despachos</a></h5>
              <p className='pr-lg-3'> Av. Vigo, 108, 5ºD, 36003 Pontevedra</p>
              <p className='pr-lg-3'> Calle Agustina de Aragón, 18, P6, 4ºA</p>
              <h4 className='mt-4 text-white'>Sigueme</h4>
              <div className='atf-footer-social-icon mt-4'>
                <a href='#' className='icon'> <i className='fab fa-facebook' /> </a>
                <a href='#' className='icon'> <i className='fab fa-dribbble' /> </a>
                <a href='#' className='icon'> <i className='fab fa-behance' /> </a>
                <a href='#' className='icon'> <i className='fab fa-linkedin' /> </a>
                <a href='#' className='icon'> <i className='fab fa-twitter' /> </a>
              </div>
            </div>
          </div>
          {/* <!--- END COL --> */}

          <div className='col-lg-4 atf-footer-link wow fadeIn' data-wow-duration='1s' data-wow-delay='0.2s' data-wow-offset='0'>
            <div className='atf-footer-box'>
              <h5><a href=''> Contacto </a></h5>
              <p className='pr-lg-3'> 619 78 80 26 </p>
              <p className='pr-lg-3'> svabogados@hotmail.com </p>
            </div>
          </div>
          {/* <!--- END COL --> */}

          <div className='col-lg-4 atf-footer-link wow fadeIn' data-wow-duration='1s' data-wow-delay='0.5s' data-wow-offset='0'>
            <h5>Instagram</h5>
            <Image
              alt='Instagram'
              src='/law/footer/1.jpg'
              width={100} height={300}
              // fill
              // sizes='100vw'
              // style={{
              //   maxWidth: '100%'
              // }}
            />
            {/* <a href=''><img src='assets/img/law/footer/1.png' alt='Instragram' /></a>
            <a href=''><img src='assets/img/law/footer/2.png' alt='Instragram' /></a>
            <a href=''><img src='assets/img/law/footer/3.png' alt='Instragram' /></a>
            <a href=''><img src='assets/img/law/footer/4.png' alt='Instragram' /></a>
            <a href=''><img src='assets/img/law/footer/1.png' alt='Instragram' /></a>
            <a href=''><img src='assets/img/law/footer/2.png' alt='Instragram' /></a> */}
          </div>
          {/* <!--- END COL --> */}
        </div>
        {/* <!--- END ROW --> */}
      </div>
      {/* <!--- END CONTAINER --> */}

      {/* <!-- FOOTER SECTION END--> */}
    </footer>
  // <!--- END FOOTER -->
  )
}

export default Footer
