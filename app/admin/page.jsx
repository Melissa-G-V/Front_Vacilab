'use client'
import { useEffect, useState,useContext } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from 'public/page.module.css'
import { Chart } from 'react-google-charts';

import { ClientsContext } from "../contexts/usuario";

export default function admin() {
  const {userId, userAdmin, userToken} = useContext(ClientsContext)
  const [comments, setComments] = useState([]);
  const [comments2, setComments2] = useState([]);
  const [cards, setCards] = useState([]);
  const [users, setUsers] = useState([]);

   useEffect(() => {
    async function getComments() {
      const response = await fetch("http://localhost:3004/comment")
      const dados = await response.json()
      console.log(dados);
      setComments(dados)
    }
    getComments()
  }, [])

  async function del(id) {   
    const response = await fetch("http://localhost:3004/comment/"+id, {
      method: "DELETE",
      headers: { 
        "Content-type": "application/json",
        "Authorization": `Bearer ${userToken}`
      },
    })
   }
   
   useEffect(() => {
    async function getData() {
      const responseCards = await fetch("http://localhost:3004/card",{
      headers: { 
        "Content-type": "application/json",
        "Authorization": `Bearer ${userToken}`
      }}
      );
      const dataCards = await responseCards.json();
      console.log(dataCards)
      setCards(dataCards);
   
      const responseUsers = await fetch("http://localhost:3004/user",{headers: { 
        "Content-type": "application/json",
        "Authorization": `Bearer ${userToken}`
      }});
      const dataUsers = await responseUsers.json();
      setUsers(dataUsers);
   
      const responseComments = await fetch("http://localhost:3004/comments");
      const dataComments = await responseComments.json();
      setComments2(dataComments);
    }
    getData();
   }, []);
   
   const TTCards = cards.length;
   const TTUsers = users.length;
   const TTComments = comments.length;
   const TTLikes = comments.reduce((TT, comment) => TT + comment.likes, 0);
   
   const dataCards = [
    ["Total Cartas"],
    [ TTCards],
   ];
   
   const dataUsers = [
    ["Usuarios Totais"],
    [TTUsers],
   ];
   
   const dataComments = [
    ["Comentarios"],
    [TTComments],
   ];
   
   const dataLikes = [
    ["Soma Likes"],
    [TTLikes],
   ];


return(
  <div className="container-fluid bg-dark text-white">
      <h1 className="text-center">
        Administration
      </h1>
    <div className="row">

    <div className="col">
      <p>commentary</p>
      {comments.map(comment => (
 
 
<div className="card mb-4">
<div className="card-body bg-dark text-white">
<p class="small text-white mb-0">Commentario: </p>

  <p>{comment.texto}</p>

  <div className="d-flex justify-content-between">
    <div className="d-flex flex-row align-items-center">
      <p className="small mb-0 ms-2">{comment.User.nickname}</p>
    </div>
    <div className="d-flex flex-row align-items-center">
        <button className='btn btn-sm btn-success'>
    <i className="bi bi-person-heart"/>
    <span className="small text-white mb-0 mx-1"> {comment.likes}</span>
    </button>
    <button className='btn btn-sm btn-danger' onClick={() =>{ del(comment.id); window.location.reload();}}>
 <i className="bi bi-trash"/>
</button>
    </div>
  </div>
</div>
</div>
      ))}
      </div>
      <div className="col-8">
      <div className="container-fluid bg-dark text-white">

       <p>Estatistics</p>
       <div className='container-fluid'>
         <div className='row'>
           <div className='col-3 text-dark'>
             <Chart
               chartType="Table"
               data={dataCards}
               width="80%"
               height="400px"
               legendToggle
             />
           </div>
           <div className='col-3 text-dark'>
             <Chart
               chartType="Table"
               data={dataUsers}
               width="80%"
               height="400px"
               legendToggle
             />
           </div>
           <div className='col-3 text-dark'>
             <Chart
               chartType="Table"
               data={dataComments}
               width="80%"
               height="400px"
               legendToggle
             />
           </div>
           <div className='col-3 text-dark'>
             <Chart
               chartType="Table"
               data={dataLikes}
               width="80%"
               height="400px"
               legendToggle
             />
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
        
  </div>


    )
}