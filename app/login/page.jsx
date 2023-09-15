'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function LogIn() {

         
      return(
        <div className="form-container bg-white rounded">
        <div className="bg-dark text-white py-1 text-center rounded-top">
        <a className="navbar-brand mb-2" href="/">
            <img src="../dogslogo.png" alt="" width="200" height="60"/>
            </a>
          <h4>Login</h4>
        </div>

        <div className="col px-4">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="bg-secondary text-white form-control form-control-sm" id="email" placeholder="Exemple@gmail.com"/>
          </div>
        </div>                  
        <div className="col px-4">
          <div className="mb-3">
            <label htmlFor="pw" className="form-label">Senha</label>
            <input type="text" className=" bg-secondary text-white form-control form-control-sm" id="pw" placeholder="Must contain 1 number, 1 uppercase, 1 symbol"/>
          </div>
        </div>
        <div className='col'>
          <div className="d-grid gap-2">
            <br/>
            <button className="btn btn-danger text-black" type="button">Login</button>
          </div>
        </div>
      </div>
      
        
      )
    
}