'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from 'public/page.module.css'
import Lista from '../component/list'
import { useForm } from "react-hook-form";

export default function CardList() {
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { register, handleSubmit, reset } = useForm('');

    const router = useRouter()
  
    useEffect(() => {
      async function getCards() {
        const response = await fetch("http://localhost:3004/Card")
        const dados = await response.json()
        setCards(dados)
        setIsLoading(false)
      }
      getCards()
    }, [])

    async function del(id) {    
      const response = await fetch("http://localhost:3004/card/"+id, {
        method: "DELETE"
      })
      const nwdata = cards.filter(card => card.id != id)
      setCards(nwdata)
    }

  async function UpdateFav(id) {
    console.log('ESTÀ FUNCIONANDO??')
  const response = await fetch("http://localhost:3004/Card/" + id, {
    method: "GET"
  });
  //console.log(response)

  const data = await response.json();

  console.log(data.favorite)

  const favoriteVal = {
    favorite: !data.favorite
  };

  fetch("http://localhost:3004/Card/" + id, {
    method: "PATCH", 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(favoriteVal)
  });
}

  async function FilterCard(coll, filter_type){
      const response = await fetch("http://localhost:3004/Card?"+coll+'='+filter_type,{
        method: "GET"
      })
      const data = await response.json();
      console.log(data)
      if(response.lenght === 0){
        console.log('No Data Not Seting')
      }else{
          setCards(data)

      }

  }

const Principais = cards.filter(card => card.favorite);
const Secundarios = cards.filter(card => !card.favorite);
const Ajustados = [...Principais, ...Secundarios];


    const CardList = Ajustados.map(card => (
        <Lista key={card.id}
          card={card}
          favoritar={() => UpdateFav(card.id)}
          alter={() => router.push('update/'+card.id)}
          deleting={() => del(card.id)}

        />  
      ))
    {        
            return (
    <div className={styles.grad}>
        <form onSubmit={(e) => {
          e.preventDefault();
          const coll = document.getElementById('coll').value;
          const filter_type = document.getElementById('filter_type').value;
          FilterCard(coll, filter_type);
   }}>
    <div className="row mx-2 my-1">

    <div className="col-3">
      <div className="form-group text-white">
        <label for="name">Filter</label>
        <input type="text" className="form-control bg-dark text-white" id="filter_type" placeholder="The Warrior" {...register("filter_type")} required />
      </div>
    </div>

    <div className="col-3">
    <div className="form-group text-white">
      <label for="type">Type of filter</label>
        <select className="form-control bg-dark text-white" id="coll" {...register("coll")} required >
        <option>name</option>
        <option>type</option>
        </select>
      </div>
    </div>
<div className="col-2 pt-4">
    <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    
</div>
</form>
                    
                <div className="row px-3" >
                {CardList}
                </div>
                </div>
            );
        };
    }