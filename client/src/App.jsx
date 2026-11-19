
import './App.css'

import Navbar from "./components/Navbar";
import SliderNavbar  from "./components/SliderNavbar";
import SectionHome from "./components/sections/SectionHome";
import SectionInformation from "./components/sections/SectionInformation";
import Footer from "./components/Footer";
import SectionAccount from "./components/sections/SectionAccount";
import About from "./components/about";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import SignUp  from "./components/SignUp";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
 
    <Routes>
    <Route
        path="/"
        element={
            <>
           
         <Navbar />
         <SliderNavbar />
         <SectionHome />
         <SectionInformation />
         <SectionAccount />
         <Footer />
           
           </>
         }
      />
     <Route
      path="/about"
       element={
      <>
      <Navbar />
      <About />
      <Footer />
      </>
    }
   />

     <Route
      path="/contact"
       element={
      <>
      <Navbar />
      <Contact />
      <Footer />
      </>
    }
   />


    <Route
  path="/shop"
  element={
    <>
      <Navbar />
      <Shop
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Footer />
    </>
  }
    />
     
  <Route
  path="/cart"
  element={
    <>
      <Navbar />
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Footer />
    </>
  }
/>




        {/*  Button */}

     <Route
      path="/loginPage"
       element={
       <>
      <Navbar />
      <LoginPage />
      <Footer />
       </>
       }
     />


      <Route
      path="/signup"
       element={
       <>
      <Navbar />
      <SignUp  />
      <Footer />
       </>
       }
     />
      

     

   </Routes>
    
     
  )
}


  

export default App
