import React from 'react'
import {NavLink,Route} from "react-router-dom"
 const Card= ({img,resName,des}) => {
   
  return (
    <>
      
        <div className="card">
            {/* <div className="card-img" style={{'backGroundImage':{img}}}>   
            </div> */}
            <img src={img} className="card-img" alt="" />

            <div className="desc">
                <h3>{resName}</h3>
                <h4>{des}</h4>
            </div>
           
           <NavLink to='/restaurant' >
            <button  className="view-restau">View</button>
           </NavLink>
           
        </div>

    </>
  )
}

export default Card;

