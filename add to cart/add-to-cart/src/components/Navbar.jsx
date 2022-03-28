import React from 'react';
import {useCart} from "react-use-cart";
import "./home.css";
import {Link} from "react-router-dom";
import Cart from "./Cart"



export default function Navbar() {
  const {totalUniqueItems}=useCart();
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">product.com</a>;
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
      </ul>
      <div>
      <Link to="/Cart">   <i className="fa-solid fa-cart-shopping icon1"></i></Link>
   
      
     
       <p className='dot' style={{"background":"rgb(54, 69, 73)",
       "color":"white",
       "width":"20px",
       "borderRadius":"40px",
       "textAlign":"center",
       "position":"absolute",
       "top":"0px",}}>{totalUniqueItems}</p>
      
      </div>
    </div>
  </div>
</nav>
    
    
    
    </>
  )
}
