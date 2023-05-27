import { Inter } from 'next/font/google'
import styles from './inicio.module.css'
import NavBar from '@/Components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.body}>
      <h1 className={styles.title}>Store</h1>
      <NavBar/>
    </main>
  )
}
