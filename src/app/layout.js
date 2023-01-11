import '../styles/globals.css'
import '../styles/animate.css'
import '../styles/magnific-popup.css'
import '../styles/odometer.min.css'
import '../styles/responsive.css'
import '../styles/slick-theme.css'
import '../styles/slick.css'
import '../styles/slicknav.css'
import '../styles/bootstrap.css'
// import '../styles/bootstrap.css.map'

const RootLayout = ({ children }) => {
  return (
    <html>
      <head>
        <title>SV ABOGADOS</title>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
