

'use-client'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useContext, useState, useEffect } from "react"
//  import { useRouter } from "next/navigation"
//  import { useForm } from "react-hook-form";
  import {ClientsContext} from "../contexts/usuario";

  import React from 'react';

  const Modal = ({comments, onClose, currentCardId}) => {
    const {userId} = useContext(ClientsContext)
    const {userToken} = useContext(ClientsContext)
    const [newPost, setNewPost] = useState(false);


    const [texto, setTexto] = useState('');

    const comment = async () =>{
        console.log('clicado')
        setNewPost(true);

        try {
          const sent = await fetch("http://localhost:3004/comment",
          {
            method: "POST",
            headers: { 
                "Content-type": "application/json",
                "Authorization": `Bearer ${userToken}`
            },
            body: JSON.stringify({ "id_user":userId,"id_card":currentCardId,"texto":texto })
          },
        )
        console.log(sent)
        } catch (error) {
          console.error('Fetch request failed:', error);
        }
       }
    const favs = async (id) => {
        console.log('Favoritado')
        fetch("http://localhost:3004/comment/favorite/" + id, {
          method: "PATCH", 
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setNewPost(true);

      }
      
      useEffect(() => {
        if (newPost) {
         setNewPost(false);
        }
       }, [newPost]);

    return (
      <div className='container bg-white px-3 py-3'>
        <button className='btn-sm' onClick={onClose}>Close</button>

        <div>
          {comments.map(com =>

<div className="card mb-4">
<div className="card-body bg-dark text-white">
<p class="small text-white mb-0">Commentario: </p>

  <p>{com.texto}</p>

  <div className="d-flex justify-content-between">
    <div className="d-flex flex-row align-items-center">
      <p className="small mb-0 ms-2">{com.User.nickname}</p>
    </div>
    <div className="d-flex flex-row align-items-center">
        <button className='btn btn-sm btn-danger'  onClick={() => {
                          favs(com.id);
                        }}>
    <i className="bi bi-person-heart"/>
    <span className="small text-white mb-0 mx-1"> {com.likes}</span>
    
    </button>
    </div>
  </div>
</div>
</div>
          )}
    </div>
          <label for="Textarea">Commentario:</label>
          <textarea className="form-control" id="Texto" rows="3" onChange={e => setTexto(e.target.value)}></textarea>
         
          <button type="submit" className="btn btn-primary" onClick={comment}>Submit</button>
            </div>
            

    );
  };


  export default Modal;
