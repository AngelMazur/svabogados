import '../styles/globals.css'
import Navigation from './components/Navigation'

const RootLayout = ({ children }) => {
  return (
    <html>
      <head>
        <title>SV ABOGADOS</title>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
