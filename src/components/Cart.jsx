import React,{useState,useEffect} from 'react'
import AddedItems from './AddedItems'
import './Styling/Cart.css'
function Cart({addedItems,TotalSum,setTotalSum}) {    // addedItems is array containing objects.

  

  useEffect(() => {
   console.log("chnge sum here");

  }, [addedItems])
  
  const func=(val)=>{
          setTotalSum((prev)=>{
            return prev+val
          })
  }
  const func2=(val)=>{
    setTotalSum((prev)=>{

      if(prev<=1)
      return 0;
      
      return prev-val;
    })
  }
  return (
    <>
    <h1>Your Order</h1>
    <div className="Cart">

       {addedItems.map((items)=>{   // yha pe call kiya h map func ko addedItems array pr
        return(
          <>
          <AddedItems Item={items} SumFunc={func} DesFunc={func2}  />  
          {/* ye ek component h ek jo ki cart me add huye items ka h */}
          </>
        )
       })}
    </div>

     <hr />
    <div className="total-sum">
      <h5>Total Sum</h5>
      &#8377;  {TotalSum}
    </div>
     <br></br>
    <button className='order-btn' >Order!</button>
    </>
  )
}

export default Cart