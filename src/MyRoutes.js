import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Pages/About";
import Cart from "./components/Pages/Cart";
import Deals from "./components/Pages/Deals";
import Home from "./components/Pages/Home";
import Materialdemo from "./components/Pages/Materialdemo";
import Services from "./components/Pages/Services";
import Signin from "./components/Pages/Signin";
import Signup from "./components/Pages/Signup";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/signin" element={<Signin/>}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/cart" element={<Cart/>}/> 
      <Route path="/deals" element={<Deals/>}/>
<Route path="/services" element={<Services/>}/>
      {/* material pages */}
      <Route path="/mui" element={<Materialdemo/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
