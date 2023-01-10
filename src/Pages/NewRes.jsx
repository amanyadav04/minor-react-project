import React, { useState, useEffect } from 'react'
import Cart from '../components/Cart'
import Dishes from '../components/Dishes'
import MenuItems from '../components/MenuItems'
import Navbar from '../components/Navbar'
import './OpenRes.css'

const arr = [
    {
        img:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f1qxnzmqotwq65fkceie',
        name: 'Kesar pista kulfi',
        rate: 10,
        desc: 'Cubes of crispy paneer with garlic, onions, green chillies tossed in soya sauce and home made chili sauce. | Deep Fried |'
    },
    {
        img:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kkq4h8nor4rukvhxjfpj',
        name: 'Special Faludi Kulfi',
        rate: 20,
        desc: 'Paneer cooked with a blend of different spices which adds to the richness of the curry.'
    },
    {
        img:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ft0gdips2g3a7odbeaxh',
        name: 'Special Rabdi Faluda Kulfi',
        rate: 30,
        desc: 'Fresh corn kernels dusted slightly in seasoned flour, deep fried and flavoured with freshly white pepper, rock salt, spring onions and capsicum.'
    },
    {
        img:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f1qxnzmqotwq65fkceie',
        name: 'Kulfis',
        rate: 40,
        desc: 'Tasty and crispy dish made of chopped onions, cauliflower, garlic, chilli fried until golden and coated in cornflour salt with medley of sauce rich in sweet,sour and spicy flavours.'
    }
]
const NewRes = () => {


    const [Menushow, setMShow] = useState();
    const [Detailshow, setDShow] = useState({ 'display': 'none' });

    const [cartItems, setcartItems] = useState([])

    const [TotalSum, setTotalSum] = useState(0);


    const add = (item, setremoveBtn) => {

        setremoveBtn(true);
        setcartItems((prev) => {

            if (prev.includes(item))
                return [...prev]
            else
                return [...prev, item]

        })
    }

    const remove = (item, setremoveBtn) => {
        console.log('remove is clicked');
        setremoveBtn(false);
        setTotalSum((prev) => {
            return prev - item.rate;
        })
        setcartItems((prev) => {
            const index = prev.indexOf(item);
            prev.splice(index, 1);

            return [...prev];
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
                    <h2> StarBucks </h2>
                    <br></br>
                    Beverages, Desserts
                    Old Palasia, Indore
                    Open now
                    8am – 11:45pm (Today)

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


                    {arr.map((val, index) => {
                        return (
                            <>

                                {/* <div key={index} className="menu">

                                    <Dishes name={val.name} rate={val.rate} desc={val.desc} />
                                    <button className='AddtoCart'onClick={()=>add(val)} >{(removeBtn?"Remove":"Add")}</button>
                                    
                                </div> */}

                                <MenuItems  val={val} index={index} addFunc={add} removeFunc={remove} />
                            </>
                        )
                    })}

                </div>
                <div className="cart">

                    <Cart addedItems={cartItems} TotalSum={TotalSum} setTotalSum={setTotalSum} />
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