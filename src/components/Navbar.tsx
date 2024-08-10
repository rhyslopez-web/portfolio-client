import { useState } from "react"
import Button from "./Button"
import { PlusIcon, MinusIcon } from "lucide-react"
// import logo from '../assets/logo.png'

const Navbar = () => {

    const [mobileMenu,setMobileMenu] = useState(false)

    const mobileToggle = () => {
        setMobileMenu(!mobileMenu)
    }
    
  return (
    <nav className='py-4 px-10 flex justify-between fixed top-5 left-0 right-0 bg-transparent z-50'>
        <a href="">
            {/* <img className="h-10" src={logo} alt="" /> */}
        </a>

        <div className="hidden lg:flex gap-3">
            <Button label="Projects" link="#"/>
            <Button label="About" link="#"/>
            <Button label="Stack" link="#"/>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
            <a onClick={mobileToggle}>
                {!mobileMenu 
                ?
                <button className="flex justify-center items-center gap-1 border border-primary-blue bg-primary-blue text-white rounded-full px-4 py-1">
                Menu <PlusIcon/>
                </button>

                :
                <button className="flex justify-center items-center gap-1 border border-primary-blue text-primary-blue rounded-full px-4 py-1">
                Menu <MinusIcon/>
                </button>
                }
            </a>
        </div>

    </nav>
  )
}

export default Navbar