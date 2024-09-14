import Navbar from '../components/Navbar'
import './HomePage.css'
import Projects from "../components/Projects"
import Heading from "../components/Heading"
import Socials from "../components/Socials"
import {motion, AnimatePresence} from 'framer-motion'

const HomePage = () => {


  return (
    <div 
    className="h-screen lg:p-5 bg-[#2500dd] overflow-hidden">
        <Navbar/>
        <AnimatePresence>
          <motion.div 
          initial={{
            y: 1000,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 1,
          }}
          exit={{
            opacity: 0,
            y:1000
          }}

          id="viewport" 
          className="h-full bg-[#e5e5e5] lg:rounded-tl-lg lg:rounded-tr-3xl lg:rounded-br-lg 
          lg:rounded-bl-3xl overflow-scroll overflow-x-hidden relative">
          
            <Heading/>
            <Projects/>

          </motion.div>
        </AnimatePresence>

        <Socials/>
    </div>
  )
}

export default HomePage