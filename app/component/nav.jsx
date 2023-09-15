'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Nav() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
      <img src="../dogslogo.png" alt="" width="120" height="30"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="cardlist">CardList</a>
        <a className="nav-link" href="addcard">Add Card</a>
        <a className="nav-link" href="login">LogIn</a>
        <a className="nav-link" href="decklist">Decks</a>
        <a className="nav-link" href="estatisticas">Estatistica</a>
        <a className="nav-link border border-danger " href="#">Guerra!</a>
      </div>
    </div>
  </div>
</nav>

    )
}