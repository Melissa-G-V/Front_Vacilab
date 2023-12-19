'use client'
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from 'public/page.module.css'


export default function registrar() {
    const [imgUrl, setImgUrl] = useState('');
    const { register, handleSubmit, reset } = useForm('');
    const [inputValue, setInputValue] = useState('');

    const params = useParams()
    const router = useRouter()


    useEffect(() => {
        async function getAnimal() {
          const response = await fetch("http://localhost:3004/animais/"+params.id)
          const data = await response.json()

          reset({
            nome: data.nome,
            cor:data.cor,
            genero:data.genero,
            raca:data.raca,
            data_nascimento:data.data_nascimento,
            compartilhado:data.compartilhado,
            microchip:data.microchip,
            castrado:data.castrado,

          })
        }
        getAnimal()
      }, [])


      async function Update(data) {    
        const animais = await fetch("http://localhost:3004/animais/update/"+params.id,
          {
            method: "PATCH",
            headers: { 
              "Content-type": "application/json",
            },
            body: JSON.stringify({ ...data })
          },
          console.log('enviado')
        )
      }

    

    const DisplayImagem = (event) => {
        const file = event.target.files[0];
        const maxSize = 500000; 
        if (file.size > maxSize) {
         alert('File size should be less than 500KB');
         return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
         setImgUrl(reader.result);
        };
        reader.readAsDataURL(file);
       };
  
       return (
        <div id="main-wrapper" className="container">
        <div className="row justify-content-center my-5">
            <div className="col-xl-12">
                <div className="card border-0">
                    <div className="card-body p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-12">
                                <div className="p-5">
                                    <form onSubmit={handleSubmit(Update)}>    
                                                <div className="row">
                                                    <div className="col">
                                                    <div className="form-group my-2">
                                                    <label for="Nome">Nome</label>
                                                    <input type="Nome" {...register("nome")} required className="form-control" id="Nome"/>
                                                </div>
                                                </div>

                                            </div>
                                            <div className="form-group my-2">
                                                        <label for="Cor">Pelagem/Plumagem</label>
                                                <input type="Cor" {...register("cor")} required className="form-control" id="Cor"/>
                                                <p class="font-italic small">ex: Caramelo/Louro/Preto/Calico/outros...</p>
                                            </div>                
                                                {inputValue === 'Passaros' ? (
                                                <div className="form-group my-3">
                                                {<><label for="Raça">Tipo de Ave</label>
                                                <input type="text" {...register("raca")} required className="form-control" id="Raça"/>
                                                <p class="font-italic small">ex: Papagaio/Piriquito/Galinha/Pomba/outros...</p></>}
                                                </div>
                                                ) : inputValue === 'Pequenos Roedores' ? (
                                                    <div className="form-group my-3">
                                                    
                                                {    <><label for="Raça">Tipo de Roedor</label>
                                                <input type="text"  {...register("raca")} required  className="form-control" id="Raça"/>
                                                <p class="font-italic small">ex: Hamster/Porquinho da India/Rato/outros...</p></>}
                                                </div>
                                                ) : (
                                                <div className="form-group my-3">
                                                    {<><label for="Raça">Raça</label>
                                                    <input type="text"  {...register("raca")} required  className="form-control" id="Raça"/>
                                                    <p class="font-italic small">Utilize a sigla SRD para animais sem raça definida/vulgo vira-lata</p></>}
                                                </div>
                                                )}
                                            <div className="row">

                                                    <div className="col">
                                                    <label for="genero">Genero</label>
                                                    <select class="form-control"  {...register("genero")} required  id="genero" onChange={(e) => setInputValue(e.target.value)}>
                                                    <option value={"F"}>Femea</option>
                                                    <option value={"M"}>Macho</option>
                                                    <option value={"H"}>Hemafrodita</option>
                                                    </select>
                                                    </div>

                                            </div>

                                    <br></br>
                                        <div class="form-check form-check-inline ">
                                            <label class="form-check-label"  for="MicroChip">MicroChip</label>
                                            <input class="form-check-input"  {...register("microchip")} type="checkbox" id="MicroChip" value="MicroChip"/>
                                        </div>
                                        <div class="vr mx-2"/>
                                        <div class="form-check form-check-inline ">
                                            <label class="form-check-label" for="Castrado/a">Castrado</label>
                                            <input class="form-check-input" {...register("castrado")}   type="checkbox" id="Castrado/a" value="Castrado/a"/>
                                        </div>
                                        <div class="vr mx-2"/>
                                        <div class="form-check form-check-inline ">
                                            <input class="form-check-input" {...register("compartilhado")}   type="checkbox" id="Compartilhado" value="Compartilhado"/>
                                            <label class="form-check-label"  for="Compartilhado">Condominio/Compartilhado</label>
                                        </div>
                                        <div className="form-group my-3">
                                            <label htmlFor="image" className="form-label">Imagem: </label>
                                            <input type="file" id='image'  className="form-control" {...register("image")} onChange={DisplayImagem}  />
                                        </div>

                                        <div className="col-12 text-center mb-5">
                                        {imgUrl ? (
                                        <>
                                        <img src={imgUrl} alt="Image preview" style={{width:100, height:100, borderRadius: '50%', objectFit: 'cover'}} />
                                        <label className="mx-4" for="Especie">imagem</label>
                                        </>
                                        ) : (
                                        <>
                                        <img src="/placeholder.png" alt="PlaceHolder" style={{width:100, height:100, borderRadius: '50%', objectFit: 'cover'}} />
                                        <label className="mx-4" for="Especie">Imagem Exemplo</label>
                                        </>
                                        )}
                                        </div>
                                        <button type="submit" onClick={() => router.push('/animais/'+params.id) }  className="btn btn-block w-100 btn-outline-success border-3">Editar Animal</button> 
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
