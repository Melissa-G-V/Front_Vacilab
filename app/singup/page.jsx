'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from 'public/page.module.css'


export default function SingUp() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
    newpassword: ""
  }});

  async function Sent(data) {
    const card = await fetch("http://localhost:3004/User",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...data })
      },
    )
   
  }
    
      return(
        <div className="form-container bg-white rounded">
        <div className="bg-dark text-white py-1 text-center rounded-top">
          <h4>Novo Usuario</h4>
        </div>
        <form onSubmit={handleSubmit(Sent)}>
        <div className=" form-group col px-4 mt-2">
          <div className="mb-3">
            <label htmlFor="nickname" className="form-label">Nome</label>
            <input type="text" className="bg-secondary text-white form-control form-control-sm" id="nickname" placeholder="JackofTrades" {...register("nickname")} required/>
          </div>
        </div>
        <div className=" form-group col px-4">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="bg-secondary text-white form-control form-control-sm" id="email" placeholder="Exemple@gmail.com" {...register("email")} required/>
          </div>
        </div>                  
        <div className=" form-group col px-4">
          <div className="mb-3">
            <label htmlFor="pw" className="form-label">Senha</label>
            <input type="text" className=" bg-secondary text-white form-control form-control-sm" id="password" placeholder="Must contain 1 number, 1 uppercase, 1 symbol" {...register("password")} required/>
          </div>
        </div>
        <div className=" form-group col px-4">
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" id="recover" {...register("recover")}/>
            <label className="form-check-label" htmlFor="recover">Enviar email de recuperação senha?</label>
          </div>
        </div>
        <div className='form-group col'>
          <div className="d-grid gap-2">
            <br/>
            <button className="btn btn-danger text-black" type="submit">Cadastrar</button>
          </div>
        </div>
         </form>
      </div>
     
        
      )

    
  }