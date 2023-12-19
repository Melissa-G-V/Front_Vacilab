"use client";
import { useEffect, useState, useContext } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation"
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Carteirinha_list from '../../component/carteiras.jsx'

import styles from '../../../public/page.module.css';



const DownloadPDF = async (element) => {
    const input = document.getElementById(element);
    const canvas = await html2canvas(input);
    const Data = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(Data);
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(Data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save("Carterinha_Vacina.pdf");
}


export default function Animais() {
    const [animais, setAnimais] = useState([])
    const [carteira, setCarteira] = useState([])
    const router = useRouter()


    const [isLoading, setIsLoading] = useState(true)
    const { register, handleSubmit, reset } = useForm('');
    const params = useParams()


    useEffect(() => {
        async function getAnimais() {
            const response = await fetch("http://localhost:3004/Animais/"+params.id)
            const dados = await response.json()
            console.log(dados)
            setAnimais(dados)
        }
        async function getCarteira() {
            const response = await fetch("http://localhost:3004/Carteira/"+params.id)
            const dados = await response.json()
            console.log(dados)
            setCarteira(dados)
        }
        getAnimais()
        getCarteira()
    }, [])

    
const columns = [
    { name: "Fabricante", path: "fabricante" },
    { name: "Classificação", path: "classificacao" },
    { name: "Finalidade", path: "finalidade" },
    { name: "Aplicado", path: "aplicado" },
    { name: "Dose", path: "dose" },
    { name: "Expiração", path: "expiracao" },
    { name: "Fabricação", path: "fabricacao" },
    { name: "Aplicador", path: "aplicador" },

   ];
   


    return (
        <div className="row">
            <div className="col-2">
            </div>
                <div className="col-8">
                <div className="card mb-3 mt-4 mx-3" >
        <div className="row g-0">
            <div className="col-md-4">
                <img src="../placeholder.png" style={{width: 30 + "vh"}} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <div className="row">
            <div className="col mt-2">
                <div>
                    <h3 className="lead fw-medium">{animais.nome}</h3>
                </div>
            </div>
            <div className="col mt-2">
                <h3 className="text-secondary lead fw-medium">{animais.especie}</h3>
            </div>
            <hr/>
            </div>
            <div className="row">
                <div className="col">
                <small editable="inline" className="text text-dark" style={{letter_spacing: 1 + "px"}}>
                Data Nascimento: {new Date(animais.data_nascimento).toLocaleDateString()}
                </small>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <p><b>Genero: </b>{animais.genero}</p>
                </div>
                <div className="col">
                    <p><b>Castrado/a:</b>
                    {animais.castrado ? <span>✔️</span> : <span>❌</span>}
                        </p>
                    </div>
                <div className="col">
                <p><b>Coloração: </b>{animais.cor}</p>
                </div>
                <div className="row">
                <div className="col">
                <p><b>Raça: </b>{animais.raca}</p>

                </div>
                    <div className="col">
                    <p><b>Microchip:</b>
                    {animais.microchip ? <span>✔️</span> : <span>❌</span>}
                        </p>
                    </div>
                    <div className="col">
                        <p><b>Compartilhado:</b>
                        {animais.compartilhado ? <span>✔️</span> : <span>❌</span>}
                        </p>
                        </div>    
                            </div>                    
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                
                <div className="row justify-center mb-2">
                <div className="col">
                <button type="submit" className="btn btn-block w-100 btn-outline-dark border-3">Excluir</button> 
                    </div>
                <div className="col">
                <button type="submit" onClick={() => router.push('/vacina/' +params.id)} className="btn btn-block w-100 btn-outline-success border-3">Vacinar</button> 
                    </div>
                <div className="col">
                <button type="submit" onClick={() => router.push('/editar/' +params.id)} className="btn btn-block w-100 btn-outline-secondary border-3">Editar</button> 
                </div>

                <button className="my-4 btn btn-small btn-outline-danger border-4" onClick={() => DownloadPDF('table')}>
                    Download PDF
                    </button>

                <div>
                <table className="table" id="table">
    <thead>
        <tr>
        {columns.map((column, index) => (
            <th key={index}>{column.name}</th>
        ))}
    </tr>
    </thead>
    <tbody>
    {carteira.map((item, index) => (
        <tr key={index}>
            {columns.map((column, index) => (
            <td key={index}>
                {column.path === "aplicado" ||
                column.path === "expiracao" ||
                column.path === "fabricacao"
                ? new Date(item[column.path]).toLocaleDateString()
                : item[column.path]}
            </td>
            ))}
        </tr>
        ))}
    </tbody>
    </table>
                </div>
            </div>
            </div>
        </div>
    );
}