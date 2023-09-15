'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from 'public/page.module.css'
import Deck from '../component/deck'
import { useForm } from "react-hook-form";




export default function DeckList() {
    const [decks, setDecks] = useState([])
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { register, handleSubmit, reset } = useForm('');

    const router = useRouter()
  
    useEffect(() => {
      async function getCards() {
        const response = await fetch("http://localhost:3004/Card")
        const dados = await response.json()
        setCards(dados)
        setIsLoading(false)
      }
      async function getDecks() {
        const response = await fetch("http://localhost:3004/Deck")
        const dadosD = await response.json()
        setDecks(dadosD)
        setIsLoading(false)
      }
      getDecks()
      getCards()
    }, [])

    async function del(id) {    
        const response = await fetch("http://localhost:3004/deck/"+id, {
          method: "DELETE"
        })
        const nwdata = decks.filter(deck => deck.id != id)
        setCards(nwdata)
      }
    

      async function generateDeck(ids, event) {
        const decks = {};
        const values = ids.map(item => item.id)
        const dn = document.getElementById('deckname').value;
      
        for (let i = 0; i < 6; i++) {
          const key = `card_${i}`;
          const genI = Math.floor(Math.random() * values.length);
          const rdsId = values[genI];
          decks[key] = rdsId;
        }
        decks.deckname = dn
        decks.favor = false

        //return decks;
        //console.log(decks)
        const decksent = await fetch("http://localhost:3004/Deck",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...decks })
      },
    )
      }


      async function Fav(id) {
        const response = await fetch("http://localhost:3004/deck/" + id, {
          method: "GET"
        });
        const data = await response.json();
        const favoriteVal = {
          favor: !data.favor
        };
      
        fetch("http://localhost:3004/Deck/" + id, {
          method: "PATCH", 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(favoriteVal)
        });
      }
      
const DeckList = decks.map(deck => (
        <Deck key={deck.id}
          deck={deck} cards={cards} deleting={()=> del(deck.id)} favs={()=> Fav(deck.id)}/> 
           ))

    return (
        <div className={styles.grad}>
        <div className="container rounded">
        <div className="text-center text-white">
        <h2>Decklist</h2>
        <div className="row">
        {DeckList}
        </div>
        
        <form className="" onSubmit={handleSubmit((e)=>{ generateDeck(cards,e)})}>
        <div className="form-group text-white">
        <label htmlFor="image" className="form-label">DeckName: </label>
        <input type="text" id='deckname' className="form-control bg-dark text-white" required/>
        </div>
        <button className="btn btn-danger mb-2" onClick={() =>{window.location.reload()}} type="submit">
                <i className="bi bi-dice-6-fill text-dark"  style={{fontSize: 20}}> Gerar Deck</i>
        </button>
        </form>
        </div>
        </div></div>
    )//onClick={() => generateDeck(cards,'name')} 
}
