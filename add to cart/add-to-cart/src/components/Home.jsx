import {React,useState} from 'react'
import ItemCard from "./ItemCard";
import {product} from "../product";
import Navbar from './Navbar';
import "./home.css";






export default function Home() {
const [items ,setItems] = useState(product);


  return (
    <>


    <div className="container-fluid col-10">
  

    <Navbar/>

    <h1 className='text-center'>add to cart</h1>
    <div className='py-4 container'>
        <div className="row justify-content-center">
         

       {
           items.map((element)=>{
               console.log(element);
               return  <ItemCard key={element.id} {...element} item={element}/>

           })
       }

          
         
        </div>
    </div>
    


    </div>
   

  
    
    
    </>
  )
}
