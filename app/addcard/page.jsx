'use client'
import { useEffect, useState,useContext  } from "react"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from 'public/page.module.css'
import Lista from '../component/list'
import {ClientsContext} from "../contexts/usuario";
//const {mudaId,mudaNome,userName, userAdmin} = useContext(ClientsContext)

export default function CardAdd() {
  const [imgUrl, setImgUrl] = useState('');
  const { register, handleSubmit, reset } = useForm('');
  const {userToken} = useContext(ClientsContext)
  
  async function Sent(data) {
    const card = await fetch("http://localhost:3004/Card",
    {
      method: "POST",
      headers: { 
          "Content-type": "application/json",
          "Authorization": `Bearer ${userToken}`
      },
      body: JSON.stringify({ ...data })
    },
  )
    
  }

  const Paste = (event) => {
    const Url = event.clipboardData.getData('text');
    setImgUrl(Url);
  };

  return (
    <div className={styles.grad}>
    <div className=" mx-5 my-5 ">

    <div className="row">
        <div className="col-6">
        <form onSubmit={handleSubmit(Sent)}>
    <div className="form-group text-white">
    <label for="name">Card Name</label>
    <input type="text" className="form-control bg-dark text-white" id="name" placeholder="The Warrior" {...register("name")} required />
    </div>
    <div className="form-group text-white">
    <label for="type">Type</label>
    <select className="form-control bg-dark text-white" id="type" {...register("type")} required >
      <option>Mage</option>
      <option>Ranged</option>
      <option>Malee</option>
    </select>
    </div>

    <div className="form-group text-white">
    <label htmlFor="power" className="form-label">Power</label>
            <input type="number" step="1" className="form-control bg-dark text-white" min='0' max='5' id="power" {...register("power")} required />
    </div>

    <div className="form-group text-white">
    <label htmlFor="defence" className="form-label">Defense</label>
            <input type="number" step="1" className="form-control bg-dark text-white" min='0' max='5' id="defence" {...register("defence")} required />
    </div>

    
    <div className="form-group text-white">
        <label htmlFor="image" className="form-label">image: </label>
        <input type="text" id='image' className="form-control bg-dark text-white" onPaste={Paste} {...register("image")} required />
    </div>
        
    <div className="form-group form-check text-white my-2">
    <input type="checkbox" className="form-check-input" id="favorite" {...register("favorite")} />
    <label className="form-check-label" for="favorite" >Favorite?</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

        <div className="col-6">
            <h5 className="text-white">Image Preview:</h5>
        {imgUrl && <img src={imgUrl} alt="Image preview" style={{width:200}} />}
        </div>
    </div>
   

    
    </div>
    
    </div>
  );
}
