'use client'
import React, { useState } from 'react'

const FormContact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes manejar la lógica de envío del formulario
    // Puedes acceder a los valores de los estados name, email, subject y message
    console.log('Submit:', { name, email, subject, message })
  }

  return (
    <section id='contact' className='atf-section-padding pt-0'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='atf-section-title text-left'>
              {/* <h5 className='sub-title text-primary text-uppercase mb-0 f-15 ps-1'>Legal Laws</h5> */}
              <h3>Consulta gratuita</h3>
              <p className='f-15 mt-3'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              <div className='contact mt-4'>
                <form id='contact-form' className='atf-contact-form form' onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='form-group col-lg-6'>
                      <input type='text' name='name' className='form-control' id='name' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className='form-group col-lg-6'>
                      <input type='email' name='email' className='form-control' id='form_email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='form-group col-lg-12'>
                      <input type='text' name='subject' className='form-control' id='subject' placeholder='Your Subject' value={subject} onChange={(e) => setSubject(e.target.value)} required />
                    </div>
                    <div className='form-group col-lg-12'>
                      <textarea rows='6' name='message' className='form-control' id='message' placeholder='Your Message' value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </div>
                    <div className='col-lg-12'>
                      <div className='atf-contact-btn text-left'>
                        <button type='submit' value='Submit Now' name='submit' id='submitButton' className='atf-themes-btn' title='Submit Your Message!'>Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormContact
