import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Pages/About";
import Blogs from "./components/Pages/Blogs";
import Cart from "./components/Pages/Cart";
import Contact from "./components/Pages/Contact";
import Counter from "./components/Pages/Counter";
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
   
      
      {/* material pages */}
      <Route path="/mui" element={<Materialdemo/>}/>
      <Route path="/deals" element={<Deals/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/contact" element={<Contact/>}/>



      {/* hooks */}
      <Route path="/counter" element={<Counter/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
