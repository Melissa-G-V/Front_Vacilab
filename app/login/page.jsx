'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
import styles from '../../public/page.module.css';

export default function LogIn() {
  // const [imgUrl, setImgUrl] = useState('');
  // const { register, handleSubmit, reset } = useForm('');

//   async function Envia(item) {
//       const response = await fetch('http://localhost:3004/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...item
//         }),
//       });
   
   
//       const data = await response.json();
//       console.log(data)
//       localStorage.setItem('user',  JSON.stringify({"access_token":data.access_token,"id":data.id,"name":data.name,"email":data.email, "validation": data.validated}));
//       console.log('aqui');
// }

      return(
        <div id="main-wrapper" className="container">
        <div className="row justify-content-center my-5">
            <div className="col-xl-6">
                <div className="card border-0">
                    <div className="card-body p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="mb-5">
                                        <h3 className="h4 font-weight-bold text-theme">Login</h3>
                                    </div>
                                    <form className="text-center">
                                        <div className="form-group">
                                            <label for="Email">Email</label>
                                            <input type="email" className="form-control" id="Email"/>
                                        </div>
                                        <div className="form-group mb-5">
                                            <label for="Senha">Senha</label>
                                            <input type="password" className="form-control" id="Senha"/>
                                        </div>
                                        <button type="submit" className="btn border-2 btn-block btn-outline-secondary">Entre</button> 
                                    </form>
                                </div>
                            </div>
    
                            <div className="col-lg-6 d-none d-lg-inline-block">
                            <div className={`${styles.account} rounded-right`}>
                                <div className="overlay rounded-right"></div>
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