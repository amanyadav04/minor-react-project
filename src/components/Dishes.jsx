import React, { useState } from 'react'


import './Styling/Dish.css'
function Dishes({name,rate,desc,Background}) {
  
 
  return (
    
    <>
      <div className="listings">
        <div className="img-of-dish" style={{'backgroundImage': `url(${Background})`}}>

        </div>
        <span className="dishes">
         <h4>{name}</h4>
         <p className='rate' >&#8377; {rate}</p>
         <p className='description' >{desc}</p>
        </span>
        
      </div>
    </>
  )
}

export default Dishes