import React from 'react'
import Navbar from '../components/Navbar'
import './OpenRes.css'
function openRes() {
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

                <button className="menu route-btn">
                    Menu
                </button>
                <button className="details route-btn">
                    Details
                </button>
            </div>


          
              
            <div className="menu-cart-container">

                <div className="menu-container">


                    <div className="listings">
                        <div className="dish-img">

                        </div>
                        <span className="dishes">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aspernatur.
                        </span>
                    </div>
                    <div className="listings">
                        <div className="dish-img">

                        </div>
                        <span className="dishes">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aspernatur.
                        </span>
                    </div>
                    <div className="listings">
                        <div className="dish-img">

                        </div>
                        <span className="dishes">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aspernatur.
                        </span>
                    </div>
                    <div className="listings">
                        <div className="dish-img">

                        </div>
                        <span className="dishes">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aspernatur.
                        </span>
                    </div>
                    <div className="listings">
                        <div className="dish-img">

                        </div>
                        <span className="dishes">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aspernatur.
                        </span>
                    </div>

                </div>

                
                <div className="cart">
                    <h1>cart</h1>
                </div>


            </div>

           
        </div>
    )
}

export default openRes