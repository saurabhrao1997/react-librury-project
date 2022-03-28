import React from 'react';
import {useCart} from "react-use-cart";
 
export default function ItemCard({title,discription,price,img,item}) {

const {addItem } = useCart();


  return (
  <>
        <div className='col-11 col-md-4 col-lg-3 mx-0 mb-4'>
            
        <div className="card p-0 overflow-hidden h-100 shadow text-center" >
  <img src={img} className="card-img-top img-fluid" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-discription">{discription}</p>
    <h6 className='card-price'>{price}</h6>
    
    <a href="#" className="btn btn-primary" onClick={()=>addItem(item)}>add to card</a>
  </div>
</div>
            
            </div> 
        
  
  
  </>
  )
}
