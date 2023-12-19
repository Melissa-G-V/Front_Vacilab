'use-client'
import styles from '../../public/page.module.css';
import { useRouter } from "next/navigation"
export default function Animais_list(props) {
    const router = useRouter()

return(
<div className="col-md-12 col-sm-8  py-2 px-4 my-3">
<div className="card">
        <div className="lc-block py-3 px-3">
        <img alt="" className="rounded-circle float-start me-2 mx-2 my-2" src="/placeholder.png" style={{width: 15 + "vh"}} loading="lazy"/>
        <div className="row">
            <div className="col mt-2">
                <div>
                    <h3 className="lead fw-medium">{props.animal.nome}</h3>
                </div>
            </div>
            <div className="col mt-2">
                <h3 className="text-secondary lead fw-medium">{props.animal.especie}</h3>
            </div>
            <hr/>
            </div>
            <div className="row">
                <div className="col">
                <small editable="inline" className="text text-dark" style={{letter_spacing: 1 + "px"}}>
                Data Nascimento: {new Date(props.animal.data_nascimento).toLocaleDateString()}
                </small>
                </div>
            </div>
            
            <div className="row">
                <div className="col">
                <p><b>Genero: </b>{props.animal.genero}</p>
                </div>
                <div className="col">
                    <p><b>Castrado/a:</b>
                    {props.animal.castrado ? <span>✔️</span> : <span>❌</span>}
                        </p>
                    </div>

                <div className="col">
                <p><b>Coloração: </b>{props.animal.cor}</p>
                </div>
                <div className="row">
                <div className="col">
                <p><b>Raça: </b>{props.animal.raca}</p>

                </div>
                    <div className="col">
                    <p><b>Microchip:</b>
                    {props.animal.microchip ? <span>✔️</span> : <span>❌</span>}
                        </p>
                    </div>

                <div className="col">
                    <p><b>Compartilhado:</b>
                    {props.animal.compartilhado ? <span>✔️</span> : <span>❌</span>}
                        </p>
                    </div>
                    <hr/>
                <div className="row justify-center mb-2">
                <div className="col">
                <button type="submit" className="btn btn-block w-100 btn-outline-dark border-3">Historico</button> 
                    </div>
                <div className="col">
                <button type="submit" onClick={() => router.push('/animais/' +props.animal.id)} className="btn btn-block w-100 btn-outline-success border-3">Carteirinha</button> 
                    </div>
                <div className="col">
                <button type="submit"  onClick={() => router.push('/editar/' +props.animal.id)}className="btn btn-block w-100 btn-outline-secondary border-3 ">Editar</button> 

                    </div>
                    </div>
            </div>                    
        </div>
    </div>
</div>


</div>

)
}