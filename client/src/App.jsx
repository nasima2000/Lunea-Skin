
import './App.css'
import Navbar from "./components/Navbar";
import SliderNavbar  from "./components/SliderNavbar";
import SectionHome from "./components/sections/SectionHome";
import SectionInformation from "./components/sections/SectionInformation";
function App() {
  return (
    <>
       <Navbar />

      
         <SliderNavbar />
         <SectionHome />
         <SectionInformation />

    </>
     
  )
}

export default App
