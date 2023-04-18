import React from 'react'

const ContactSection = () => {
  const latitude = '42.418756'
  const longitude = '-8.638792'

  return (
    <section id='address' className='atf-contact-area bg-light atf-section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='atf-contact-info wow fadeIn' data-wow-duration='1s' data-wow-delay='0.3s' data-wow-offset='0'>
              <div className='atf-section-title'>
                <h3>Contactar</h3>
                <p className='f-15 mt-3'>Si necesitas asistencia legal, no dudes en ponerte en contacto con nosotros. Estamos disponibles para responder a tus preguntas, brindarte información detallada sobre nuestros servicios y ofrecerte una atención legal personalizada. Nos enorgullecemos de ofrecer soluciones efectivas y de calidad a nuestros clientes. ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte!
                </p>
              </div>

              <div className='atf-contact-details mt-4'>
                <i className='fa fa-home' />
                <h5>Dirección</h5>
                <p>Av. Vigo, 108, 5ºD, 36003 Pontevedra</p>
              </div>

              <div className='atf-contact-details mt-4'>
                <i className='fa fa-phone' />
                <h5>Móvil</h5>
                <p>619 78 80 26</p>
              </div>

              <div className='atf-contact-details mt-4'>
                <i className='fa fa-envelope' />
                <h5>E-mail</h5>
                <p>svabogados@hotmail.com</p>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            {/* Renderizar la ubicación del usuario */}
            <div id='atf-map-area'>
              <iframe
                style={{ border: 0 }}
                src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=16&ie=UTF8&iwloc=B&output=embed`} allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
