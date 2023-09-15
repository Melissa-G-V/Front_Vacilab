import '../public/globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './component/nav'
import styles from 'public/page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BattleDogs',
  description: 'Created by Melissa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={styles.main}>
        <Nav/>
        {children}
        </body>
    </html>
  )
}
