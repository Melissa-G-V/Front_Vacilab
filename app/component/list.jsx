'use client'
import { useEffect, useState,useContext } from "react"
import { useRouter } from "next/navigation"
import {ClientsContext} from "../contexts/usuario";

import Modal from './modal.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Swal from 'sweetalert2'

export default function Lista(props) {
  const {userId, userAdmin} = useContext(ClientsContext)
  const [currentCardId, setCurrentCardId] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [comments, setComment] = useState([])


  useEffect(() => {
    async function getC() {
     const response = await fetch('http://localhost:3004/comment/card/' + currentCardId)
     const dados = await response.json()
     setComment(dados)
    }
    if (currentCardId) {
     getC()
    }
   }, [currentCardId])
   

  // async function Favorite(id) {
  //   console.log('Favoritado')
  //   fetch("http://localhost:3004/comment/favorite/" + id, {
  //   method: "PATCH", 
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   //body: JSON.stringify()
  // });
  // }

  
  const CList = Array.isArray(comments) ? comments.map(com => (
    <Modal key={com.id}
      com={com} favs={()=> Favorite(com.id)}/> 
  )) : null;




    function isFave(favorito, id){
        if(favorito){
        return(
            <button className="btn btn-success" onClick={() => {
              props.favoritar();
              window.location.reload();
            }}>
            <i className="bi bi-star-fill text-white " style={{fontSize: 16}} title="Favorito"> Destacado
            </i>
        
        </button>
            )
        }else{
        return(
            <button className="btn btn-dark" onClick={() => {
              props.favoritar();
              window.location.reload();
            } }>
            <i className="bi bi-star text-white " style={{fontSize: 16}}
            title="Favorito"> Não Destacado</i>
            </button>
        )
        }
    }

    function isPow(power) {
        const p = power;
        const np = 5 - p;
        const icons = [];
      
        for (let i = 0; i < p; i++) {
          icons.push(
            <i
              className="bi bi-p-circle-fill text-dark "
              style={{ fontSize: 18 }}
              title="Power"
            ></i>
          );
        }
        for (let i = 0; i < np; i++) {
          icons.push(
            <i
              className="bi bi-p-circle text-secondary "
              style={{ fontSize: 18 }}
              title="Power"
            ></i>
          );
        }
        return(icons)
    }


  function isDef(power) {
        const d = power;
        const nd = 5 - d;
        const icons = [];
      
        for (let i = 0; i < d; i++) {
          icons.push(
            <i
              className="bi bi-shield-fill text-dark "
              style={{ fontSize: 18 }}
              title="Defence"
            ></i>
          );
        }
        for (let i = 0; i < nd; i++) {
          icons.push(
            <i
              className="bi bi-shield-slash text-secondary "
              style={{ fontSize: 18 }}
              title="Defence"
            ></i>
          );
        }
        return(icons)
    }


    

    function isType(type){
        if(type == 'Malee'){
        return(
            <span>
            <i className="bi bi-universal-access text-danger ms-2" style={{fontSize: 24}} title="Malee"></i>
            <h6><span className="badge text-white bg-danger">Malee</span> </h6>
            </span>
        )
        }else if (type == 'Ranged'){
        return(
            <span>
            <i className="bi bi-arrow-through-heart-fill text-success ms-2" style={{fontSize: 24}} title="Ranged"></i>
            <h6><span className="badge text-white bg-success">Ranged</span> </h6>
            </span>
        )
        }else{
            return(<span>
                <i className="bi bi-moon-stars-fill text-primary ms-2" style={{fontSize: 24}} title="Mage"/>
                <h6><span classNAme="badge text-white text-dark bg-primary">Mage</span> </h6>
                </span>)
        }
    }


        return (
            <div className="col-sm-12 col-xs-12 col-lg-3 col-md-3 my-3">
            <div className="card">
            <div className="card-block">
            <h4 className="card-title text-center">{props.card.name} {isType(props.card.type)}</h4>
            <img src={props.card.image} className="card-img-top" alt={`image de ${props.card.name}`} />
            <div className="card-body">
                <ul className="list-group list-group-flush">
                <li className="list-group-item text-center"><span className="badge text-black bg-warning">Power: </span> {isPow(props.card.power)}</li>
                <li className="list-group-item text-center"><span className="badge text-black bg-warning">Defence: </span> {isDef(props.card.defence)}</li>
                {userAdmin?
                
                <li className="list-group-item text-center"> <span>{isFave(props.card.favorite)}</span>
                </li>:
                <></>
                }
                <li className="list-group-item text-center">
                  {userAdmin ?
                  <>
                  <button type="button" onClick={props.alter} className="btn btn-info" ><i className="bi bi-hammer"></i></button>
                   <button type="button" className="btn btn-danger mx-2" onClick={props.deleting}><i className="bi bi-trash2-fill" ></i></button>
                  </>:
                  <></>
                  }
                  { userId ?
                  <>
                  {/* onClick={() => setShowModal(true)}> */}
                    <button type="button" className="btn btn-secondary" onClick={(event) => {setCurrentCardId(props.card.id), setShowModal(true, event.currentTarget.id)}}>Commentar                   
                    <i className="bi bi-chat-square-dots"></i>
</button>
                  <div className="row">
                  {showModal && <Modal comments={comments} onClose={() => setShowModal(false)} currentCardId={currentCardId}/>}

                  </div>
                  </>
                     :
                    <></>
                  }
                  </li>
                </ul>
                </div>
            </div>
            </div>
            </div>



    )
}