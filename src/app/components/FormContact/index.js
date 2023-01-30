import React from 'react'

const FormContact = () => {
  return (
    <>
      <section id='contact' class='atf-section-padding pt-0'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-6'>
              <div class='atf-section-title text-left'>
                {/* <h5 class='sub-title text-primary text-uppercase mb-0 f-15 ps-1'>Legal Laws</h5> */}
                <h3>Consulta gratuita</h3>
                <p class='f-15 mt-3'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <div class='contact mt-4'>
                  <form id='contact-form' class='atf-contact-form form' method='POST' action='assets/php/mail.php'>
                    <div class='row'>
                      <div class='form-group col-lg-6'>
                        <input type='text' name='name' class='form-control' id='name' placeholder='Your Name' required='required' />
                      </div>
                      <div class='form-group col-lg-6'>
                        <input type='email' name='email' class='form-control' id='form_email' placeholder='Your Email' required='required' />
                      </div>
                      <div class='form-group col-lg-12'>
                        <input type='text' name='subject' class='form-control' id='subject' placeholder='Your Subject' required='required' />
                      </div>
                      <div class='form-group col-lg-12'>
                        <textarea rows='6' name='message' class='form-control' id='message' placeholder='Your Message' required='required' />
                      </div>
                      <div class='col-lg-12'>
                        <div class='atf-contact-btn text-left'>
                          <button type='submit' value='Submit Now' name='submit' id='submitButton' class='atf-themes-btn' title='Submit Your Message!'>Send Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <p class='form-message' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FormContact
