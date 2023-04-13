import React from 'react'

const ContactSection = () => {
  const latitude = '42.418756'
  const longitude = '-8.638792'

  return (
    <section id='address' className='atf-contact-area atf-section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='atf-contact-info wow fadeIn' data-wow-duration='1s' data-wow-delay='0.3s' data-wow-offset='0'>
              <div className='atf-section-title'>
                <h3>Get In Touch</h3>
                <p className='f-15 mt-3'>Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary
                  making this the first true generator on the Internet. It uses a dictionary.
                </p>
              </div>

              <div className='atf-contact-details mt-4'>
                <i className='fa fa-home' />
                <h5>Home Address</h5>
                <p>1 Grafton Street, Dublin, Ireland University.</p>
              </div>

              <div className='atf-contact-details mt-4'>
                <i className='fa fa-phone' />
                <h5>Mobile Number</h5>
                <p>+135 773 321 4442</p>
              </div>

              <div className='atf-contact-details mt-4'>
                <i className='fa fa-envelope' />
                <h5>Email Address</h5>
                <p>demo@example.com</p>
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
