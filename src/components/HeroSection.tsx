import Navbar from "./Navbar"
import Projects from "./Projects"
import './HeroSection.css'
import Heading from "./Heading"
import Socials from "./Socials"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const HeroSection = () => {

  useGSAP(() => {
    gsap.from('#viewport', {
      y: 1000,
      opacity: -1,
      ease: "power",
      duration: 1
    })
  }, [])

  return (
    <div className="h-screen lg:p-5 bg-[#2500dd] overflow-hidden">
        <div 
        id="viewport"
        className="h-full bg-[#e5e5e5] lg:rounded-tl-lg lg:rounded-tr-3xl 
        lg:rounded-br-lg lg:rounded-bl-3xl overflow-scroll
        overflow-x-hidden
        ">
        <Heading/>        
        <Navbar/>
        <Projects/>

        </div>

        <Socials/>  

    </div>
  )
}

export default HeroSection