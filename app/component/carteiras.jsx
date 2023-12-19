'use-client'
import styles from '../../public/page.module.css';
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation"
import { useEffect, useState, useContext } from "react"

export default function Carteirinha_list(props) {
  const [carteira, setCarteira] = useState([])

  useEffect(() => {
    async function getCarteira() {
        const response = await fetch("http://localhost:3004/Carteira/2")
        const dados = await response.json()
        console.log(dados)
        setCarteira(dados)
    }
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
 ];
 
 return (
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
 );
 





}