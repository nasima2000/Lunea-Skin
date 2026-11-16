
import './App.css'
import Navbar from "./components/Navbar";
import SliderNavbar  from "./components/SliderNavbar";
import SectionHome from "./components/sections/SectionHome";
import SectionInformation from "./components/sections/SectionInformation";
import Footer from "./components/Footer";
import SectionAccount from "./components/sections/SectionAccount";
function App() {
  return (
    <>
       <Navbar />

      
         <SliderNavbar />
         <SectionHome />
         <SectionInformation />
         <SectionAccount />
         <Footer />
    </>
     
  )
}

export default App
