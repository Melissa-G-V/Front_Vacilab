'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import 'bootstrap-icons/font/bootstrap-icons.css';
import Swal from 'sweetalert2'

export default function Lista(props) {

    function isFave(favorito, id){
        if(favorito){
        return(
            <button className="btn btn-success" onClick={() => {
              props.favoritar();
              window.location.reload();
            }}>
            <i className="bi bi-star-fill text-white " style={{fontSize: 16}} title="Favorito"> Favorito
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
            title="Favorito"> Não favorito</i>
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

    
    async function UpdateFav(id) {
      const response = await fetch("http://localhost:3004/Card/" + id, {
        method: "GET"
      });
      const data = await response.json();
      const favoriteVal = {
        favorite: !data.favorite
      };
    
      fetch("http://localhost:3004/Card/" + id, {
        method: "PATCH", 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(favoriteVal)
      });
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
                <li className="list-group-item text-center"> <span>{isFave(props.card.favorite)}</span>
                </li>
                <li className="list-group-item text-center">
                  <button type="button" onClick={props.alter} className="btn btn-info" ><i className="bi bi-hammer"></i></button> <button type="button" className="btn btn-danger mx-2" onClick={props.deleting}><i className="bi bi-trash2-fill" ></i></button>
                </li>
                </ul>
                </div>
            </div>
            </div>
            </div>



    )
}