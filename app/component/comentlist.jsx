

'use-client'

//import { useEffect, useState, useContext } from "react"
//  import { useRouter } from "next/navigation"
//  import { useForm } from "react-hook-form";

  import React from 'react';

  const CList = ({com}) => {
    
    return (
      <div className='container bg-white px-3 py-3'>
        
        <ul className="list-group list-group-flush  text-white bg-dark">

            <li className="list-group-item   text-white bg-dark"><p>id</p>
            {com.id}
            </li>
            <li className="list-group-item  text-white bg-dark"><p>commentario</p>
            {com.texto}
            </li>

            <li className="list-group-item  text-white bg-dark"> <p>likes</p>
            {com.likes}
            </li>

            </ul>
      </div>
    );
  };

  export default Modal;
