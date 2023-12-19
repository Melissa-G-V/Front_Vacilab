"use client";

import { useState, useEffect } from 'react';
import styles from '../public/page.module.css';
import Clients from './contexts/usuario.jsx';
import { AuthContext } from './contexts/usuario.jsx';
import { useRouter } from 'next/navigation'

export default function Home({Component, pageProps }) {
    const [favoriteCards, setFavoriteCards] = useState([]);
    const router = useRouter()


 useEffect(() => {
 async function getFavoriteCards() {
   const response = await fetch("http://localhost:3004/card");
   const cards = await response.json();
   const favoriteCards = cards.filter(card => card.favorite);
   setFavoriteCards(favoriteCards);
 }
 getFavoriteCards();
 }, []);

return (
<main className={styles.main}>
  <div className={styles.description}>
  <div id="main-wrapper" class="container my-2">
    <div className="row justify-content-center">
        <div className="col-xl-10">
            <div className="card border-0">
                <div className="card-body p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <div className="p-5">
                                <h6 className="h5 mb-0">Bem-Vindo</h6>
                                <p className="text lead mt-5 mb-3">Nosso objetivo é facilitar o historico de vacinação de seu pet.</p>
                                <p className="text lead mt-3 mb-3"><span className='lead text-muted fw-medium'>Vacilab</span> oferece a carterinha de vacinação em suas mãos, sem complicaçoes, aonde estiver acesse com facilidade.</p>
                                <p className="text lead mt-3 mb-3"><span className='lead text-muted fw-normal'>Você</span> e seu <span className='lead text-muted fw-normal'>pet</span> seguros</p>
                                <button type="submit"  onClick={() => router.push('/login') } className="btn btn-sm btn-outline-success">Entre</button><span> ou </span>
<button type="submit"  onClick={() => router.push('/singup')} className="btn btn-sm btn-outline-secondary">Cadastre-se</button>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-inline-block">
                            <div className={`${styles.accountblock} rounded-right`}>
                                <div className="overlay rounded-right"></div>
                                <div className={`${styles.testimonial}`}>
                                    <cite className="lead text-black fw-medium">"Viajar com seu pet nunca foi tão facil"</cite>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    <div className={`${styles.grad} py-2 px-2`}>
      <div className="py-2 px-2">
          <div className={`${styles.menu} py-2 px-2 row`}>
              <div className={`${styles.card} col-md-3 bg-white mx-2`}>
                <div className={styles.card1}>
                  <h3>Mapa</h3>
                  <span>Acompanhe nosso mapa de vacinaçoes, e controle de doenças</span>
                </div>
              </div>
              <div className={`${styles.card} col-md-3 bg-white mx-2`}>
                <div className={styles.card2}>
                  <h3>Veterinarios</h3>
                  <span>Veja veterinaios os cadastrados em sua região</span>
                </div>
              </div>
              <div onClick={() => router.push('/animais')} className={`${styles.card} col-md-3 bg-white mx-2`}>
                <div className={styles.card2}>
                  <h3>Animais</h3>
                  <span>Acompanhe seus animais, demo se encontra aqui</span>
                </div>
              </div>
          </div>
        </div>
      </div>
  </div>
</main>
)
}
