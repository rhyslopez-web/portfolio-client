import Navbar from "./Navbar"
import Projects from "./Projects"
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className="h-screen lg:p-5 bg-[#2500dd] overflow-hidden">
        <div 
        id="viewport"
        className="h-full bg-[#e5e5e5] lg:rounded-tl-lg lg:rounded-tr-3xl 
        lg:rounded-br-lg lg:rounded-bl-3xl overflow-scroll
        overflow-x-hidden
        ">

        
        <Navbar/>
        <Projects/>

        </div>
    </div>
  )
}

export default HeroSection