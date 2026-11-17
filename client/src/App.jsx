
import './App.css'

import Navbar from "./components/Navbar";
import SliderNavbar  from "./components/SliderNavbar";
import SectionHome from "./components/sections/SectionHome";
import SectionInformation from "./components/sections/SectionInformation";
import Footer from "./components/Footer";
import SectionAccount from "./components/sections/SectionAccount";
import About from "./components/about";
import { Routes, Route } from "react-router-dom";

function App() {
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

   
      
   </Routes>
    
     
  )
}


  

export default App
