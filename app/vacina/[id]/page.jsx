'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation"

import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from 'public/page.module.css'

export default function vacina() {
    const { register, handleSubmit, reset } = useForm('');
    const [inputValue, setInputValue] = useState('');
    const router = useRouter()
    const params = useParams()


    async function Sent(data) {
        const vacina = await fetch("http://localhost:3004/vacinas", {
          method: "POST",
          headers: { 
              "Content-type": "application/json",
          },
          body: JSON.stringify({ ...data })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const secondRequest = fetch("http://localhost:3004/carteira", {
            method: "POST",
            headers: { 
                "Content-type": "application/json",
            },
            body: JSON.stringify({ vacina: data.id, animal: params.id,...data })
          });
                 secondRequest.then(response => response.json())
            .then(data => console.log(data));
        });
       }
  

    return (
        <div id="main-wrapper" className="container">
        <div className="row justify-content-center my-5">
            <div className="col-xl-12">
                <div className="card border-0">
                    <div className="card-body p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-12">
                                <div className="p-5">
                                    <form onSubmit={handleSubmit(Sent)}>    
                                                <div className="row">
                                                    <div className="col">
                                                    <div class="form-group my-2">
                                                <label for="Dose">Dose</label>
                                                <select class="form-control" id="classificacao"  {...register("dose")} onChange={(e) => setInputValue(e.target.value)} required >
                                                    <option>1º Dose</option>
                                                    <option>2º Dose</option>
                                                    <option>3º Dose</option>
                                                    <option>Reforço</option>

                                                </select>
                                                </div>
                                                </div>
                                                    <div className="col">
                                                    <div class="form-group my-2">
                                                <label for="Especie">Classificação</label>
                                                <select class="form-control" id="classificacao" {...register("classificacao")} required >
                                                    <option>MonoValente</option>
                                                    <option>PolyValente</option>
                                                </select>
                                                </div>
                                                </div>
                                            </div>
                                            
                                            <div className="row">
                                                    <div className="col">
                                                    <div class="form-group">
                                                        <label for="aplicado">Aplicado Quando</label>
                                                        <input type="date" class="form-control" {...register("aplicado")} id="aplicado" name="aplicado" required />
                                                    </div>
                                                    </div>
                                                    <div className="col">
                                                    <div class="form-group">
                                                        <label for="expiracao">Expiração</label>
                                                        <input type="date" class="form-control" id="expiracao" {...register("expiracao")}  name="expiracao" required />
                                                    </div>
                                                    </div>
                                                    <div className="col">
                                                    <div class="form-group">
                                                        <label for="fabricacao">Fabricação</label>
                                                        <input type="date" class="form-control"  {...register("fabricacao")} id="fabricacao" name="fabricacao" required />
                                                    </div>
                                                    </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                <div className="form-group my-2">
                                                    <label for="Nome">Nome do Aplicador</label>
                                                    <input type="Nome" className="form-control" {...register("aplicador")} required />
                                                </div>
                                                </div>
                                                <div className="col">
                                                <div className="form-group my-2">
                                                    <label for="Nome">Fabricante</label>
                                                    <input type="Nome" className="form-control" {...register("fabricante")}  required />
                                                </div>
                                                    </div>
                                                    <div className="form-group my-2">
                                                    <label for="Nome">Finalidade</label>
                                                    <input type="Nome" className="form-control" {...register("finalidade")}  required />
                                                </div>
                                            </div>



                                        <button type="submit" className="btn btn-block w-100 btn-outline-success border-3">Registrar Vacina</button> 
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

