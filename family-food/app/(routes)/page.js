import Image from 'next/image'
import styles from './page.module.scss'
import Navbar from '../_components/Navbar/Navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <h1>Hello, world</h1>
      
    </main>
  )
}
