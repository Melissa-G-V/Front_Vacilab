"use client";
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Animais_list from '../component/animais_list'
import { useForm } from "react-hook-form";
import styles from '../../public/page.module.css';


export default function Animais() {
    const [animais, setAnimais] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { register, handleSubmit, reset } = useForm('');
    const router = useRouter()

    useEffect(() => {
        async function getAnimais() {
          const response = await fetch("http://localhost:3004/Animais")
          const dados = await response.json()
          setAnimais(dados)
          setIsLoading(false)
        }
        getAnimais()
      }, [])



      const AnimalList = animais.map(animal => (
        <Animais_list key={animal.id}
          animal={animal}
          

        />  
      ))
    {        
            return (
                
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                    <button type="submit" onClick={() => router.push('/registrar')} className="btn btn-block w-100 btn-outline-success border-3 mt-3">Registrar Animal</button> 

                    {AnimalList}</div>

                    <div className="col-2"></div>

                </div>
        );
    };
}

