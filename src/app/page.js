import Navbar from './components/Navbar'
import Banner from './components/Banner'
import FormContact from './components/FormContact'

export default function Home () {
  return (
    <>
      <Navbar />
      <Banner />
      <section id='service' className='atf-service-area bg-light atf-section-padding'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='atf-section-title text-center wow zoomIn' data-wow-duration='1s' data-wow-delay='0.2s' data-wow-offset='0'>
                <h3>Servicios</h3>
                <div className='title-divider mt-3' />
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
                  <i className='fas fa-users' />
                </div>
                <div className='atf-services-text'>
                  <h5 className='mb-3'>Derecho civil, familia y sucesiones</h5>
                  <p>Aliqua veniam eu et esse culpa voluptate do ex consectetur velit non esse duis.</p>
                  <ul className='atf-service-inner-content mt-3'>
                    <li>Separaciones y divorcios</li>
                    <li>Impago pensiones alimentos</li>
                    <li>Modificación de medidas en el ambito de familia</li>
                    <li>Herencias</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--- END COL --> */}

            <div className='col-lg-4'>
              <div className='atf-single-services text-left wow fadeIn' data-wow-duration='1s' data-wow-delay='0.3s' data-wow-offset='0'>
                <div className='atf-services-icon mb-4'>
                  <i className='fas fa-briefcase' />
                </div>
                <div className='atf-services-text'>
                  <h5 className='mb-3'>Actuaciones generales para personas física y empresas</h5>
                  <p>Aliqua veniam eu et esse culpa voluptate do ex consectetur velit non esse duis.</p>
                  <ul className='atf-service-inner-content mt-3'>
                    <li>Redacción de contratos</li>
                    <li>Gestiones notariales</li>
                    <li>Reclamaciones civiles</li>
                    <li>Desahucios</li>
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
                  <h5 className='mb-3'>Tramites en administraciones públicas</h5>
                  <p>Exercitation sint aute cillum id consequat irure ullamco labore est velit Lorem ut labore.</p>
                  <ul className='atf-service-inner-content mt-3'>
                    <li>Gestiones en agencia tributaría</li>
                    <li>Gestiones en seguridad social</li>
                    <li>Gestiones en ayuntamientos</li>
                    <li>Trámites en extranjería</li>
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
      <FormContact />
    </>
  )
}
