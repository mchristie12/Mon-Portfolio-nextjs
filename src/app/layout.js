

import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ReduxProvider } from './provider'
import ClientOnly from './components/ClientOnly'

export const metadata = {
  title: 'Mon Portfolio',
  description: 'Portfolio personnel',
}

// Pour importer Google Fonts:
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/*
        On définit un style inline pour gérer le minHeight et le flex.
       
      */}
      <body
       //className={poppins.className}  
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          backgroundColor: '#eee4e1', // Couleur de fond
        }}
      >
        <ReduxProvider>
            <ClientOnly>
         
          <Header />
          {/*
            On donne flex: 1 au main pour qu'il occupe tout l'espace vertical restant.
          */}
          <main className="container my-1" style={{ flex: '1', paddingBottom: '60px' }}>
            {children}
          </main>
          <Footer />
          </ClientOnly>
        </ReduxProvider>
      </body>
    </html>
  )
}



