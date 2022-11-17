import React from 'react'
import Card from './Card'
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
                </div>

            </div>

        </>
    )
}

export default Cards_container