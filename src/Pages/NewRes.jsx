import React, { useState, useEffect } from 'react'
import Cart from '../components/Cart'
import Dishes from '../components/Dishes'
import Navbar from '../components/Navbar'
import './OpenRes.css'

const arr = [
    {
        name: 'Chilli Paneer',
        rate: 10,
        desc:'Cubes of crispy paneer with garlic, onions, green chillies tossed in soya sauce and home made chili sauce. | Deep Fried |'
    },
    {
        name: 'Paneer Kamlin',
        rate: 20,
        desc:'Paneer cooked with a blend of different spices which adds to the richness of the curry.'
    },
    {
        name: 'Crispy Corn',
        rate: 30,
        desc:'Fresh corn kernels dusted slightly in seasoned flour, deep fried and flavoured with freshly white pepper, rock salt, spring onions and capsicum.'
    },
    {
        name: 'Veg Kothe',
        rate: 40,
        desc:'Tasty and crispy dish made of chopped onions, cauliflower, garlic, chilli fried until golden and coated in cornflour salt with medley of sauce rich in sweet,sour and spicy flavours.'
    }
]
const NewRes = () => {


    const [Menushow, setMShow] = useState();
    const [Detailshow, setDShow] = useState({ 'display': 'none' });

    const [cartItems,setcartItems]=useState([])

    const add=(item)=>{
     setcartItems((prev)=>{
 
         if(prev.includes(item))
         return [...prev]
         else
         return [...prev,item]
 
       })
    }

    return (





        <div className="menu-body">

            <div className="menu-nav">
                <Navbar />
            </div>

            <div className="image-holder"></div>

            <div className="resDes">
                <div className="resImg">

                </div>
                <span className="descrp">
                   <h2> Name of restaurants </h2>
                  <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, nam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, nam.
                </span>
            </div>

            <div className="buttons">

                <button onClick={() => {
                    setMShow({
                        'display': ''
                    })
                    setDShow({
                        'display': 'none'
                    })
                }} className="menu route-btn">
                    Menu
                </button>


                <button onClick={() => {
                    setMShow({
                        'display': 'none'
                    })
                    setDShow({
                        'display': ''
                    })
                }} className="details route-btn">
                    Details
                </button>
            </div>

            <div style={Menushow} className="menu-cart-container">

                <div className="menu-container">


                    {arr.map((val) => {
                        return (
                            <>

                                <div className="menu">

                                    <Dishes name={val.name} rate={val.rate} desc={val.desc} />
                                    <button className='AddtoCart'onClick={()=>add(val)} >Add</button>
                                    <button className='AddtoCart'onClick={()=>add(val)} >remove</button>
                                </div>
                            </>
                        )
                    })}

                </div>
                    <div className="cart">

                    <Cart addedItems={cartItems} />
                </div>

            


            </div>

            <div style={Detailshow} className="details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore? Consectetur atque nemo, fuga, sapiente esse laborum nisi est rem illum aut ducimus ipsa? Assumenda repudiandae laudantium dolorum nihil inventore?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus aut, placeat rem non neque facere libero exercitationem at modi delectus?
            </div>


        </div>






    )
}

export default NewRes;