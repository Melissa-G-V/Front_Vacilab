'use client'
import { useEffect, useState, useContext } from "react"
import { useRouter } from "next/navigation"
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from 'public/page.module.css'
import Deck from '../component/deck'
import { useForm } from "react-hook-form";
import {ClientsContext} from "../contexts/usuario";




export default function DeckList() {
    const [decks, setDecks] = useState([])
    const {userId} = useContext(ClientsContext)
    const [isLoading, setIsLoading] = useState(true)
    const { register, handleSubmit, reset } = useForm('');

    const router = useRouter()
    console.log(userId)

    useEffect(() => {

      async function getDecks() {
        await userId
        const response = await fetch('http://localhost:3004/deck/algo/item/'+userId)
        const dados = await response.json()
        //console.log(dados)
        setDecks(dados)
      }
      getDecks()
    }, [userId])
 // Add userId as a dependency


    async function del(deckid) {    
        const response = await fetch("http://localhost:3004/deck/"+deckid+"/delete", {
          method: "DELETE"
        })
        const nwdata = decks.filter(deck => deck.deckid != deckid)
        setCards(nwdata)
      }

      async function generateDeck(event) {
        const response = await fetch("http://localhost:3004/card/all/cards")
        const dados = await response.json()
        const ids = dados.map(card => card.id);
        const result = [];
        for(let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * ids.length);
            result.push(ids[randomIndex]);
        }        
      const dn = document.getElementById('deckname').value;
      decks.deckName = dn
      decks.deckFav = false
      decks.user_id = userId
      const decksent = await fetch("http://localhost:3004/deck",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...decks })
      },
    )
    const responsedata = await decksent.json();
    const id = responsedata.id;
    const deckcards = await fetch("    http://localhost:3004/deck/"+id+"/cards",
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: { "cardIds": [5,6] }
    },
  )
  }


      async function Fav(deckid) {
        const response = await fetch("http://localhost:3004/deck/" + deckid, {
          method: "GET"
        });
        const data = await response.json();
        const favoriteVal = {
          favor: !data.favor
        };
      
        fetch("http://localhost:3004/deck/favorite/" + deckid, {
          method: "PATCH", 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(favoriteVal)
        });
      }
      
      const DeckList = Array.isArray(decks) ? decks.map(deck => (
        <Deck key={deck.deckid}
          deck={deck} deleting={()=> del(deck.deckid)} favs={()=> Fav(deck.deckid)}/> 
       )) : null;

       function sort_deck(){
      
       }
       console.log(decks)
       
    return (
        <div className={styles.grad}>
        <div className="container rounded">
        <div className="text-center text-white">
        <h2>Decklist</h2>
        <div className="row">
        {DeckList}
        </div>
        
        <form className="" onSubmit={handleSubmit((e)=>{ generateDeck(e)})}>
        <div className="form-group text-white">
        <label htmlFor="image" className="form-label">DeckName: </label>
        <input type="text" id='deckname' className="form-control bg-dark text-white" required/>
        </div>
        <button className="btn btn-danger mb-2" type="submit">
                <i className="bi bi-dice-6-fill text-dark"  style={{fontSize: 20}}> Gerar Deck</i>

        </button>
        </form>
        </div>
        </div></div>
    )
    
    //onClick={() => generateDeck(cards,'name')} 
}
