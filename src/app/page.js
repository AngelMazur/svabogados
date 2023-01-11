import Link from 'next/link'
import Image from 'next/image'

export default function Home () {
  return (
    <>
      <div id='navigation' className='fixed-top navbar-light bg-faded site-navigation'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2 col-md-3 col-sm-4'>
              <div className='site-logo'>
                <Link href='/'><Image src='/Logo.png' alt='SVabogados Logo' width={72} height={16} /></Link>
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
      {/* <!-- END NAVBAR --> */}

      {/* <!-- START HOME --> */}
      <section
        id='home' className='atf-header-area atf-align-items-details'
      >
        <div className='container'>
          <div className='row justify-content-left'>
            {/* <!--LEFT COL--> */}
            <div className='col-xl-7 col-lg-6 col-12 atf-single-details text-left'>
              <h5 className='text-white text-uppercase mb-4'><i className='fas fa-gavel me-2' />Your Personal Legal Firm</h5>
              <h2 className='text-uppercase'>Bienvenido a SV Abogados</h2>
              <p className='f-17 mt-4 text-white'>A Theme for Law , Law Firm & Culsultants.</p>
              {/* <!-- Main-btn --> */}
              <div className='atf-main-btn mt-5'>
                <a href='#contact' className='atf-themes-btn'>Your Case <i className='fa fa-angle-right' /></a>
                <a href='#contact' className='atf-themes-btn btn-2 ms-2'>Learn More <i className='fa fa-angle-right' /></a>
              </div>
            </div>
            {/* <!--- END COL --> */}
          </div>
          {/* <!--- END ROW --> */}
        </div>
        {/* <!--- END CONTAINER --> */}
      </section>
      {/* <!-- END HOME --> */}
      <section id='service' className='atf-service-area bg-light atf-section-padding'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='atf-section-title text-center wow zoomIn' data-wow-duration='1s' data-wow-delay='0.2s' data-wow-offset='0'>
                <h3>Area Of Expertise</h3>
                <div className='title-divider mt-3'> <Image src='/favicon.png' className='img-fluid' alt='divider' width={72} height={16} /></div>
                <p className='f-15 mt-3'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
              </div>
            </div>
            {/* <!--- END COL --> */}
          </div>
          {/* <!--- END ROW --> */}

          <div className='row mt-5 pt-4'>
            <div className='col-lg-4'>
              <div className='atf-single-services text-left wow fadeIn' data-wow-duration='1s' data-wow-delay='0.2s' data-wow-offset='0'>
                <div className='atf-services-icon mb-4'>
                  <i className='fab fa-bandcamp' />
                </div>
                <div className='atf-services-text'>
                  <h5 className='mb-3'>Insurance Matter</h5>
                  <p> It was popularised in the 1960s with the release of Letraset sheets containing .</p>
                  <ul className='atf-service-inner-content mt-3'>
                    <li>Medical Neglance</li>
                    <li>Law Firm</li>
                    <li>Pattent Laws</li>
                    <li>Real Estate</li>
                    <li>Family Matters</li>
                    <li>Busniess Corporate</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--- END COL --> */}

            <div className='col-lg-4'>
              <div className='atf-single-services text-left wow fadeIn' data-wow-duration='1s' data-wow-delay='0.3s' data-wow-offset='0'>
                <div className='atf-services-icon mb-4'>
                  <i className='fas fa-envelope-open-text' />
                </div>
                <div className='atf-services-text'>
                  <h5 className='mb-3'>Pattent Laws</h5>
                  <p> It was popularised in the 1960s with the release of Letraset sheets containing .</p>
                  <ul className='atf-service-inner-content mt-3'>
                    <li>Medical Neglance</li>
                    <li>Law Firm</li>
                    <li>Pattent Laws</li>
                    <li>Real Estate</li>
                    <li>Family Matters</li>
                    <li>Busniess Corporate</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--- END COL --> */}

            <div className='col-lg-4'>
              <div className='atf-single-services text-left wow fadeIn' data-wow-duration='1s' data-wow-delay='0.3s' data-wow-offset='0'>
                <div className='atf-services-icon mb-4'>
                  <i className='fab fa-uikit' />
                </div>
                <div className='atf-services-text'>
                  <h5 className='mb-3'>Fraud Protection</h5>
                  <p> It was popularised in the 1960s with the release of Letraset sheets containing .</p>
                  <ul className='atf-service-inner-content mt-3'>
                    <li>Medical Neglance</li>
                    <li>Law Firm</li>
                    <li>Pattent Laws</li>
                    <li>Real Estate</li>
                    <li>Family Matters</li>
                    <li>Busniess Corporate</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--- END COL --> */}
          </div>
          {/* <!--- END ROW --> */}
        </div>
        {/* <!--- END CONTAINER --> */}
      </section>
      {/* <!-- END PRACTISE SECTION  --> */}
    </>
  )
}
