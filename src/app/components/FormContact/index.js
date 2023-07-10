'use client'
import React, { useState } from 'react'

const FormContact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [showThankYou, setShowThankYou] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Aquí puedes manejar la lógica de envío del formulario
    // Puedes acceder a los valores de los estados name, email, subject y message
    console.log('Submit:', { name, email, subject, message })

    const body = { name, email, subject, message }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify(body)
      })

      const result = await response.json()
      console.log('Result:', result)

      setShowThankYou(false)
    } catch (error) {
      console.log('Error:', error)
    }
  }

  return (
    <section id='contact' className='atf-section-padding pt-0'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='atf-section-title text-left mt-5'>
              {/* <h5 className='sub-title text-primary text-uppercase mb-0 f-15 ps-1'>Legal Laws</h5> */}
              {showThankYou &&
                <div>
                  <h3>Consulta gratuita</h3>
                  <p className='f-15 mt-3'>En SV abogados, comprendemos la importancia de obtener asesoramiento legal adecuado antes de tomar decisiones importantes. Es por eso que ofrecemos una consulta inicial gratuita para que puedas discutir tu caso con nosotros y obtener la orientación necesaria.</p>
                  <div className='contact mt-4'>
                    <form id='contact-form' className='atf-contact-form form' onSubmit={handleSubmit}>
                      <div className='row'>
                        <div className='form-group col-lg-6'>
                          <input type='text' name='name' className='form-control' id='name' placeholder='Tu nombre' value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className='form-group col-lg-6'>
                          <input type='email' name='email' className='form-control' id='form_email' placeholder='Tu correo' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className='form-group col-lg-12'>
                          <input type='text' name='subject' className='form-control' id='subject' placeholder='Asunto' value={subject} onChange={(e) => setSubject(e.target.value)} required />
                        </div>
                        <div className='form-group col-lg-12'>
                          <textarea rows='6' name='message' className='form-control' id='message' placeholder='Tu mensaje' value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </div>
                        <div className='col-lg-12'>
                          <div className='atf-contact-btn text-left'>
                            <button type='submit' value='Submit Now' name='submit' id='submitButton' className='atf-themes-btn' title='Submit Your Message!'>Enviar consulta</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>}
              {!showThankYou &&
                <div>
                  <h3>Muchas gracias por tu mensaje.</h3>
                  <p>Nos pondremos en contacto contigo lo antes posible.</p>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormContact
