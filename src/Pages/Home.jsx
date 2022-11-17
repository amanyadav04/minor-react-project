import React from 'react'
import Navbar from "../components/Navbar";
import Cards_container from "../components/Cards_container";
function Home() {
  return (
    <>
    <Navbar/>
      <div className="big-img"></div>
      <Cards_container/>
    </>
  )
}

export default Home;