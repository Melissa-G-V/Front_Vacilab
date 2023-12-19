'use client'
import { useEffect, useState} from "react"
import React, { useContext } from 'react';
import { useRouter } from "next/navigation"
import {ClientsContext} from "../contexts/usuario";
import styles from 'public/page.module.css';


export default function Nav() {
const {mudaId,mudaNome,userName, userAdmin} = useContext(ClientsContext)
console.log(userName)

function logout() {
    mudaId(null)
    mudaNome("")
    localStorage.removeItem("user")
  
}


return (

<nav className={`${styles.navbar} navbar navbar-expand-lg`}>
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
      <img src="../vacilab.png" alt="" width="120" height="20"/>

       
      </div>
    </div>
  </nav>


    )
} //       <p>{user && <p>Welcome, {user.name}!</p>}</p>

// <div className="row ">
// <div className="col">
// <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
// <div className="container-fluid">
// <a className="navbar-brand" href="/">
//    <img src="../dogslogo.png" alt="" width="120" height="30"/>
//  </a>
//  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//    <span className="navbar-toggler-icon"></span>
//  </button>
//  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//    <div className="navbar-nav">
//      <a className="nav-link" href="cardlist">CardList</a>
//      {userAdmin ? 
//      <>
//      <a className="nav-link" href="addcard">Add Card</a>
//      <a className="nav-link" href="admin">Administration</a>
//      </>
//      :
//      <a className="nav-link" href="comments">About</a>
//      }
//      {userName ? 
//        <a className="nav-link" href="decklist">Decks</a>:
//        <p></p>
//      }
     
//    </div>
//  </div>
// </div>
// <div className="col-auto">
// <nav className="navbar navbar-expand-lg mx-2">
// <ul className="navbar-nav text-end">
//   <li className="nav-item">
//     <a className="nav-link">{userName ? userName : "Enter"}</a>
//   </li>
//   <li className="nav-item">
//     {userName ? 
//       <button className="btn btn-outline-danger btn-sm" onClick={() => { logout(); window.location.reload(); }}>Logout</button> :
//       <>
//        <a href="login" className="btn btn-outline-success btn-sm mx-1">
//        LogIn
//        </a>
//        <a href="singup" className="btn btn-outline-success btn-sm mx-1">
//        SingUp
//        </a>
    
//     </>
//     }
//   </li>
// </ul>
// </nav>
// </div>
// </nav>
// </div>
// </div>