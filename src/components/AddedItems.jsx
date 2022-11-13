import React,{useState,useEffect} from 'react'
import './Styling/AddedItems.css'
function AddedItems({Item,SumFunc,DesFunc}) {
  
  const [cnt,setCnt]=useState(0);


  // useEffect(()=>{
  //   SumFunc(Item.rate)
  //   console.log('useFFect');
  // },[cnt])



  const Inc=(rate)=>{
   
    setCnt((prev)=>{
      return prev+1;
    })
    SumFunc(rate)
  }
  const Dec=(rate)=>{
    setCnt((prev)=>{
      
     if(prev<=1)
     {
      return 0;
     }
     
      return prev-1;
    })

    if(cnt==0){

      DesFunc(0)
    }
     else{

       DesFunc(rate)
     }
  }
  return (

    
   <>
           <div className='AddedItems' >
                <div className="dish-img">

                </div>

            <span className='name' >
                {Item.name}
            </span>
                 <button  className='AddedItems-button' onClick={()=>Inc(Item.rate)} >+</button>
                 <p>{cnt}</p>
                 <button  className='AddedItems-button' onClick={()=>Dec(Item.rate)} >-</button>
           </div>
   </>
  )
}

export default AddedItems