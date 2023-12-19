'use-client'
import '../public/globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './component/nav'
import styles from 'public/page.module.css'
import ClientsProvider from './contexts/usuario.jsx'
const inter = Inter({ subsets: ['latin'] })
import Foo from './component/footer.jsx'

export const metadata = {
  title: 'Vacilab',
  description: 'Created by Melissa',
}
export default function RootLayout({ children}) {
  return (
    <html lang="pt-br">
      <body className={styles.main}>
        <ClientsProvider>
        <Nav/>
        {children}
        </ClientsProvider>
        </body>
    </html>
  )
}
