import React,{useEffect,useState} from 'react'
import Card from './Card'
import axios from "axios";
import restaurantsImages from '../DatabaseImages/restaurantsImage';
import "./Styling/card.css"
const Cards_container = () => {

   
    

    return (
        <>

            <div className="main">

                <div className="heading">
                    <h1>Restaurants</h1>
                </div>
                <br />
                <hr />

                <div className="container-flex">
                    {/* <Card
                        img={'Dish_img.jpg'}
                        resName={'Rataquile'}
                        des={'freanch food'}
                    />
                    <Card
                        img={'Dish_img.jpg'}
                        resName={'Rataquile'}
                        des={'freanch food'}
                    />
                    <Card
                        img={'Dish_img.jpg'}
                        resName={'Rataquile'}
                        des={'freanch food'}
                    />
                    <Card
                        img={'Dish_img.jpg'}
                        resName={'Rataquile'}
                        des={'freanch food'}
                    /> */}


                   {restaurantsImages.map((val)=>{
                    return(
                        <Card
                        img={val.img}
                        resName={val.name}
                        des={val.des}
                    />
                    )
                   })}
                    
                </div>

            </div>

        </>
    )
}

export default Cards_container