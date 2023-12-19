'use client'
import { useEffect, useState, useContext } from "react"
import { useRouter } from "next/navigation"

import Modal from '../component/modal.jsx'
  // pages/index.js

  export default function Test() {
    const [showModal, setShowModal] = useState(false);
    const [comments, setComment] = useState([])

    useEffect(() => {
      async function getC() {
        const response = await fetch('http://localhost:3004/comment/card/1')//id_card
        const dados = await response.json()
        //console.log(dados)
        setComment(dados)
      }
      getC()
    }, )//[userId]         await userId


    const CList = Array.isArray(comments) ? comments.map(com => (
      <Modal key={com.id}
        com={com}/> 
    )) : null;
     //deleting={()=> del(deck.deckid)} favs={()=> Fav(deck.deckid)}
    
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <div className="row">
        {showModal && <Modal comments={comments} onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}

  
