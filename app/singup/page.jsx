'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from 'public/page.module.css'


export default function SingUp() {
  const { register, handleSubmit, reset } = useForm('');
  const router = useRouter()
  const [inputValue, setInputValue] = useState('');

  async function Sent(data) {

    const usuario = await fetch("http://localhost:3004/usuarios", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...data })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
   }
      return(
        <div id="main-wrapper" className="container">
        <div className="row justify-content-center my-5">
            <div className="col-xl-10">
                <div className="card border-0">
                    <div className="card-body p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="mb-5">
                                        <h3 className="h4 font-weight-bold text-theme">Cadastrar</h3>
                                    </div>
                                    <form onSubmit={handleSubmit(Sent)}> 
                                        <div className="form-group">
                                            <label for="Nome">Nome</label>
                                            <input type="text" {...register("nome")} className="form-control" id="Nome"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="Email">Email</label>
                                            <input type="email" {...register("email")} className="form-control" id="Email"/>
                                        </div>
                                        <div className="row my-2">
                                            <div className="col">
                                            <div className="form-group ">
                                                <label for="Telefone">Telefone</label>
                                                <input type="text" {...register("telefone")} className="form-control" id="Telefone"/>
                                            </div>
                                            </div>
                                            <div className="col">
                                            <div className="form-group ">
                                                <label for="Senha">CPF</label>
                                                <input type="text" {...register("cpf")} className="form-control" id="Senha"/>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                                <label for="Senha">Senha</label>
                                                <input type="password" {...register("senha")}  className="form-control" id="Senha"/>
                                            </div>
                                            <button type="submit" onClick={() => router.push('/login')} className="btn btn-block w-100 btn-outline-success border-3 mt-2">Cadastrar</button> 

                                    </form>
                                </div>
                            </div>
                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
  // }<div className="form-container bg-white rounded">
  //       <div className="bg-dark text-white py-1 text-center rounded-top">
  //         <h4>Novo Usuario</h4>
  //       </div>
  //       <form onSubmit={handleSubmit(Sent)}>
  //       <div className=" form-group col px-4 mt-2">
  //         <div className="mb-3">
  //           <label htmlFor="nickname" className="form-label">NickName</label>
  //           <input type="text" className="bg-secondary text-white form-control form-control-sm" id="nickname" placeholder="JackofTrades" {...register("nickname")} required/>
  //         </div>
  //       </div>
  //       <div className=" form-group col px-4">
  //         <div className="mb-3">
  //           <label htmlFor="email" className="form-label">Email</label>
  //           <input type="email" className="bg-secondary text-white form-control form-control-sm" id="email" placeholder="Exemple@gmail.com" {...register("email")} required/>
  //         </div>
  //       </div>                  
  //       <div className=" form-group col px-4">
  //         <div className="mb-3">
  //           <label htmlFor="pw" className="form-label">Senha</label>
  //           <input type="text" className=" bg-secondary text-white form-control form-control-sm" id="password" placeholder="Must contain 1 number, 1 uppercase, 1 symbol" {...register("senha")} required/>
  //         </div>
  //       </div>

  //       <div className='form-group col'>
  //         <div className="d-grid gap-2">
  //           <br/>
  //           <button className="btn btn-danger text-black" type="submit">Cadastrar</button>
  //         </div>
  //       </div>
  //       </form>
  //     </div>
      