import styles from './page.module.sass'
import Nav from '../components/nav'

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.dummy}></div>
      <div id="contact" className={styles.contact}>

      </div>
    </main>
  )
}
