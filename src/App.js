import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Cards_container from "./components/Cards_container";
import OpenRes from "./Pages/OpenRes";
import Home from "./Pages/Home";
const App = () => {
  return (
    <>
       <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home/>}/>
               <Route path="restaurant" element={<OpenRes/>}/>

          </Routes>
       </BrowserRouter>    
      

      {/* <Navbar/>
      <div className="big-img"></div>
      <Cards_container/> */}
      
    </>
  )
}
export default App;