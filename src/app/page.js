import About from './components/About'
import Banner from './components/Banner'
import dynamic from 'next/dynamic'
import Footer from './components/Footer'
import FormContact from './components/FormContact'
import Navbar from './components/Navbar'
import WebServices from './components/WebServices'

const DynamicContactSection = dynamic(() => import('./components/ContactSection'), {
  loading: () => <p>Loading...</p>
})

export default function Home () {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <WebServices />
      <FormContact />
      <DynamicContactSection />
      <Footer />
    </>
  )
}
