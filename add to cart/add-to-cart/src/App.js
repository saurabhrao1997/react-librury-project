import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Home";
import { CartProvider } from 'react-use-cart';
import Cart from "./components/Cart";
import {BrowserRouter,Routes,Route} from "react-router-dom"

export default function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>

   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Cart" element={<Cart/>}/>
   </Routes>
    {/* <Home/>
    <Cart/> */}
    </CartProvider>
    
    
    
    </BrowserRouter>
    
   
    
    </>
      
  
  )
}
