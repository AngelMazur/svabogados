import React from 'react'
// import Image from 'next/image'

const About = () => {
  return (
  // <!-- START ABOUT -->
    <section id='about' className='atf-section-padding'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='atf-section-title text-center wow zoomIn' data-wow-duration='1s' data-wow-delay='0.2s' data-wow-offset='0'>
              <h3>SV abogados</h3>
              {/* <div className='title-divider mt-3'> <img src='assets/img/favicon.png' className='img-fluid' alt='divider' /></div> */}
              <p className='f-15 mt-3'>Somos un despacho que se dedica al asesoramiento y gestiones realizadas desde el  trato personalizado y cercano, para ofrecer al cliente,  soluciones de calidad y efectivas que les lleven a poder resolver sus problemas legales de la manera más satisfactoria y obtener los resultados deseados. </p>
            </div>
          </div>
          {/* <!--- END COL --> */}
        </div>
        {/* <!--- END ROW --> */}

        <div className='row mt-5 pt-4'>
          <div className='col-lg-6'>
            <div className='atf-section-title text-left wow fadeIn' data-wow-duration='1s' data-wow-delay='0.2s' data-wow-offset='0'>
              {/* <h5 className='sub-title text-primary text-uppercase mb-0 f-15 ps-1'>Legal Laws</h5> */}
              <h3>Más de 20 años de experiencia</h3>
              <p className='f-15 mt-3'>Somos un despacho que  opera en Madrid desde el año 2001, con nueva sede en Pontevedra desde el año 2021. Realizamos gestiones a nivel nacional en todos aquellos ámbitos de actuación que nos lo permiten.
              </p>
              <p className='f-15 mt-3'>
                Estamos especializados en Derecho de Familia y en Derecho de Extranjería, siendo estas áreas en las que más experiencia hemos desarrollado a lo largo de nuestra  trayectoria profesional. Si bien realizamos también otras actuaciones relacionadas con estos áreas del Derecho.
              </p>
              <div className='atf-main-btn atf-about-btn mt-4'>
                <a href='#contact' className='atf-themes-btn'>Más Información <i className='fa fa-angle-right' /></a>
              </div>
            </div>
          </div>
          {/* <!--- END COL --> */}

          <div className='col-lg-6'>
            <div className='atf-singl-video'>
              {/* <div className="atf-about-images text-center">
                <Image src="assets/img/about/about.jpg" className="img-fluid" alt="about">
              </div> */}
              <div className='waves-box'>
                <a href='https://www.youtube.com/watch?v=Ao2XIhZ0JGs' className='iq-video popup-video mfp-iframe'> <i className='fa fa-play' />
                </a>
                <div className='iq-waves'>
                  <div className='waves wave-1' />
                  <div className='waves wave-2' />
                  <div className='waves wave-3' />
                </div>
              </div>
            </div>
          </div>
          {/* <!--- END COL --> */}
        </div>
        {/* <!--- END ROW --> */}
      </div>
      {/* <!--- END CONTAINER --> */}
    </section>
  )
}

export default About
