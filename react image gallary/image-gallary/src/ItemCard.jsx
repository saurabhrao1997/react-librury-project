import React, { useState } from 'react';
import "./components/itemCard.css";


export default function ItemCard({img}) {

    const [ok,setOk] =useState(false)
      const [show ,setShow] =useState("");
      


const popImage=(imgSrc)=>{
    setShow(imgSrc);
    setOk(true);

}


    return (

        <>
         <div  className='col-11 col-md-6 col-lg-3 mx-0 mb-4' style={{display:"inline-block"}} >
            <div className="card p-1">
                <img src={img} onClick={()=>{popImage(img)}} className="img1 card-img-top img-fluid" alt=""
                style={{width:"100%"}} />

            </div>
        </div>
      

      <div className={ok ? "pop-img" : "noImage"}>
          <span onClick={()=>{setOk(false)}}>&times;</span>
          <img src={show} alt="" />

      </div>


        </>
       

      


    )
}

