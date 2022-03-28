import {React, useState} from 'react'
import "./App.css"

export default function App() {

const [height,setHeight] =useState(0);
const [weight,setWeight] =useState(0);
const [bmi,setBmi] =useState('');
const [message,setMessage]=useState('');
 


const calcBmi =(event)=>{
  event.preventDefault();
let  newHeight = height /100;
  console.log(newHeight);


  let bmi = (weight/(newHeight*newHeight))
   console.log(bmi)
   setBmi(bmi.toFixed(1));


  if(weight=== 0||newHeight===0){
    alert("please enter valid weight and height")
  }else {






    if(bmi <19){
 setMessage("you are underweight")

    }else if(bmi >= 19 && bmi < 25){
      setMessage("you are a healthy weight");
    }else{
      setMessage("you are overweight");
    }
  }



}


const reload =()=>{
  window.location.reload()
}


  return (
    <div className='app'>
      
      <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <lable>height in (cm's) :</lable>
          <input value={height} onChange={(event)=>{setHeight(event.target.value)}}></input>
        </div>

        <div>
          <lable>weight in (kgs) :</lable>
          <input value={weight}  onChange={(event)=>{setWeight(event.target.value)}}></input>
        </div>

    <div>
      <button className='btn' type="submit">submit</button>
      <button className='btn btn-outline'onClick={reload} type="submit">reload</button>
    </div>

      </form>


       <div className='center'>
        <h3>your BMI is :{bmi} </h3>
        <p>{message}</p>
        
       </div>







      </div>
    </div>
  )
}
