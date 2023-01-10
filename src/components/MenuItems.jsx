import React from 'react'
import { useState } from 'react'
import Dishes from './Dishes';

function MenuItems({val,index,addFunc,removeFunc}) {

    const [removeBtn,setremoveBtn]=useState(false);
    return (
        <>
            <div key={index} className="menu">

                <Dishes name={val.name} Background={val.img} rate={val.rate} desc={val.desc} />
                <button className='AddtoCart' onClick={()=>(removeBtn)?removeFunc(val,setremoveBtn):addFunc(val,setremoveBtn)} >{(removeBtn ? "Remove" : "Add")}</button>

            </div>
        </>
    )
}

export default MenuItems