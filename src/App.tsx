import Navbar from "./components/Navbar"
import './App.css'
import Projects from "./components/Projects"
import Heading from "./components/Heading"

const App = () => {
  return (
    <div className="h-screen lg:p-5 bg-[#2500dd] overflow-hidden">
        <div id="viewport" 
        className="h-full bg-[#e5e5e5] lg:rounded-tl-lg lg:rounded-tr-3xl lg:rounded-br-lg 
        lg:rounded-bl-3xl overflow-scroll overflow-x-hidden relative">
        
        <Navbar/>
        <Heading/>
        <Projects/>

        </div>
    </div>
  )
}

export default App