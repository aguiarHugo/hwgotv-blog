import Footer from './components/Footer';
import Navbar from './components/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'HwgoTv',
  description: 'Tudo sobre Diablo4!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} bg-dark-300`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
