import Image from 'next/image'
import styles from '../public/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <h1 className='text-center fw-bold'>BattleDogs</h1>
      <h2 className='text-center'>Uma batalha de cartas</h2>
      <h6 className='text-center'>Prepare-se para uma guerra de roer ossos</h6>
      <div className="d-grid gap-2">
        <br/>
      <button className="btn btn-dark" type="button">
      <a className="nav-link" href="singup">Começe Já</a></button>
      </div>
      </div>
    </main>
  )
}
