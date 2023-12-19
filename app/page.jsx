"use client";

import { useState, useEffect } from 'react';
import styles from '../public/page.module.css';
import Clients from './contexts/usuario.jsx';
import { AuthContext } from './contexts/usuario.jsx';

export default function Home({Component, pageProps }) {
 const [favoriteCards, setFavoriteCards] = useState([]);

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
     <h1 className='text-center fw-bold'>BattleDogs</h1>
     <h2 className='text-center'>Uma batalha de cartas</h2>
     <h6 className='text-center'>Prepare-se para uma guerra de roer ossos</h6>
     <div className="d-grid gap-2">
       <br/>
       <button className="btn btn-dark" type="button">
         <a className="nav-link" href="singup">Começe Já</a>
       </button>
     </div>
   </div>
   <div className="row">
   {favoriteCards.map(card => (
 <div className="col-3 my-5 mx-4">
   <div className="card" style={{width: "150px", height: "150px"}}>
     <img src={card.image} className="card-img-top" alt={card.name} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
     <div className="card-body">
       <p className="card-title text-white">{card.name}</p>
     </div>
   </div>
 </div>
))}
   </div>

 </main>
 )
}
