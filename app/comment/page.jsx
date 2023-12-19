'use-client'
import { useEffect, useState, useContext } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
import {ClientsContext} from "../contexts/usuario";
import Modal from '../component/modal.jsx'
  // pages/index.js
  const {userId} = useContext(ClientsContext)
  const [comments, setComment] = useState([])

  useEffect(() => {

      async function getComment() {
        //await userId
        const response = await fetch('http://localhost:3004/comment/card/1')//+id_card
        const dados = await response.json()
        //console.log(dados)
        setComment(dados)
      }
      getComment()
    }, )//[userId]

    const CommentList = Array.isArray(comments) ? comments.map(comment => (
      <Lista key={comment.id}
      comment={comment} />//deleting={()=> del(deck.deckid)} favs={()=> Fav(deck.deckid)} 
     )) : null;

  export default function Test() {
    const [showModal, setShowModal] = useState(false);

    return (
      <div>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        <div className="row">
            {DeckList}
            </div>
        {showModal &&
          <Modal onClose={() => setShowModal(false)}>

            Hello from the modal!
          </Modal>
        }
      </div>
    );
  }
