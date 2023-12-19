'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
export default function LogIn() {
  const [imgUrl, setImgUrl] = useState('');
  const { register, handleSubmit, reset } = useForm('');
  async function Envia(item) {
      const response = await fetch('http://localhost:3004/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...item
        }),
      });
   
   
      const data = await response.json();
      console.log(data)
      localStorage.setItem('user',  JSON.stringify({"access_token":data.access_token,"id":data.id,"name":data.name,"email":data.email, "validation": data.validated}));
      console.log('aqui');
}


  
      return(
        <div className="form-container bg-white rounded">
        <div className="bg-dark text-white py-1 text-center rounded-top">
        <a className="navbar-brand mb-2" href="/">
            <img src="../dogslogo.png" alt="" width="200" height="60"/>
            </a>
          <h4>Login</h4>
        </div>
        <form onSubmit={handleSubmit(Envia)}>

        <div className="col px-4">
          <div className="mb-3">
            <label htmlFor="email" className="form-control">Email</label>
            <input type="email" className="bg-secondary text-white form-control form-control-sm" id="email" placeholder="Exemple@gmail.com" {...register("email")} required />
          </div>
        </div>                  
        <div className="col px-4">
          <div className="mb-3">
            <label htmlFor="pw" className="form-control">Senha</label>
            <input type="text" className=" bg-secondary text-white form-control form-control-sm" id="senha" {...register("senha")}  placeholder="Must contain 1 number, 1 uppercase, 1 symbol"/>
          </div>
        </div>
        <div className='col'>
          <div className="d-grid gap-2">
            <br/>
            <button className="btn btn-danger text-black" type="submit"  onClick={() => window.location.reload()}>Login</button>
          </div>
        </div>
        </form>
      </div>
      
        
      )
    
}