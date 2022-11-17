import React, { useState, useEffect } from 'react'
import Cart from '../../components/Cart'
import Dishes from '../../components/Dishes'
import Navbar from '../../components/Navbar'
import './OpenRes.css'
function OpenRes() {

    const arr = [
        {
            name: 'dal batti',
            rate: '100'
        },
        {
            name: 'dal',
            rate: '100'
        },
        {
            name: 'roti',
            rate: '10'
        },
        {
            name: 'roti',
            rate: '10'
        },
        {
            name: 'roti',
            rate: '10'
        },
        {
            name: 'roti',
            rate: '10'
        }
    ]
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



            <div className="image-holder">

            </div>

            <div className="resDes">
                <div className="resImg">

                </div>
                <span className="descrp">
                    Name of restaurants
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

                                <Dishes name={val.name} rate={val.rate} />
                                <button className='AddtoCart' onClick={()=>add(val)} >Add to Order</button>
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

export default OpenRes;