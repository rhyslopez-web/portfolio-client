import Navbar from '../components/Navbar'
import './HomePage.css'
import Projects from "../components/Projects"
import Heading from "../components/Heading"
import Socials from "../components/Socials"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const HomePage = () => {

  useGSAP(() => {
    gsap.from('#viewport' , {
      y: 500,
      opacity: 0,
      ease: "power1",
      duration: 1
    })
  })

  return (
    <div className="h-screen lg:p-5 bg-[#2500dd] overflow-hidden">
        <Navbar/>

        <div id="viewport" 
        className="h-full bg-[#e5e5e5] lg:rounded-tl-lg lg:rounded-tr-3xl lg:rounded-br-lg 
        lg:rounded-bl-3xl overflow-scroll overflow-x-hidden relative">
        
        <Heading/>
        <Projects/>

        </div>

        <Socials/>
    </div>
  )
}

export default HomePage