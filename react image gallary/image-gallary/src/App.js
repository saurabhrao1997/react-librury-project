import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

import {Data} from "./components/data";

import ItemCard from './ItemCard';



export default function App() {

const [detas,setDetas] = useState(Data);
  return (
    <>

    <div className='container-fluid'>

      <div className='row justify-content-center'>
        <div className='col'>

        {console.log(detas)}
        <Navbar/>
      <h1 className='text-center text-info'>Image Gallary</h1>



              {
                  Data.map((element)=>{
                    return <ItemCard  key={element.id} {...element}/>
                  })



              }

     
          
           
         

        </div>
      </div>
    </div>


  
    </>
  )
}
