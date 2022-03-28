import React from 'react';
import {useCart} from "react-use-cart";
import "./home.css";
import Navbar from './Navbar';


export default function Cart() {


const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart

} =useCart();


if(isEmpty) return <h1 className='text-center'>your cart is empty</h1>
  return (

    
  <div className='py-4 container'>
      <div className='row justify-content-center'>
          <div className="col-12">
              <h5>cart({totalUniqueItems}) total items :({totalItems})</h5>
              <table className='table table-light table-hover m-0'>
                  <tbody>
                  {

items.map((item,index)=>{
    return(


<tr key={index}>
        <td>
            <img src={item.img} className="cart-img" alt="" />

        </td>
        <td>
            {item.title}
        </td>
        <td>{item.price}</td>
        <td>Amount({ item.amount})</td>
      


      <td>
          


          <button className='btn btn-danger ms-2' onClick={()=>{removeItem(item.id)
          }}>remove</button>
      </td>

    </tr>




    )
    
})



}

                  </tbody>




              </table>
          </div>
      </div>
  </div>
  )
}
