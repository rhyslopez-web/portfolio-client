import { useState } from "react"
import { PlusIcon, MinusIcon } from "lucide-react"
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { Link } from "react-router-dom";
import {motion, AnimatePresence} from 'framer-motion'


const Navbar = () => {

    const [mobileMenu,setMobileMenu] = useState(false)

    const mobileToggle = () => {
        setMobileMenu(!mobileMenu)
        mobileMenu ? enablePageScroll() : disablePageScroll()
    }
    
  return (
    <nav className="lg:px-10 lg:py-7 fixed lg:top-5 left-0 right-0 z-50">
        <ul className="hidden lg:flex justify-end lg:gap-2">
            <li className="border border-primary-blue text-primary-blue px-5 py-2 rounded-full backdrop-blur-sm">
                <Link to='/project' className=" ">
                    Projects
                </Link>
            </li>
            <li className="border border-primary-blue text-primary-blue px-5 py-2 rounded-full backdrop-blur-sm">
                <Link to='/project' className=" ">
                    About
                </Link>
            </li>
            <li className="border border-primary-blue text-primary-blue px-5 py-2 rounded-full backdrop-blur-sm">
                <Link to='/project' className=" ">
                    Stack
                </Link>
            </li>
        </ul>

        <div>
            <button onClick={mobileToggle} className="lg:hidden flex justify-center items-center gap-1 border border-primary-blue 
            bg-primary-blue text-white rounded-full px-4 py-2 fixed top-5 right-5 drop-shadow-lg z-50">
            Menu {mobileMenu ? <MinusIcon/> : <PlusIcon/>}
            </button>
        </div>

        <AnimatePresence>
            {mobileMenu && (
                <motion.div 
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                exit={{
                    opacity: 0
                }}
                id="mobileNav" className="lg:hidden h-screen bg-primary-blue flex justify-center items-center">
                    <ul className="flex flex-col gap-2">
                        <li><a className="font-medium text-4xl text-neutral-200 tracking-wide" href="#" onClick={mobileToggle}>Projects</a></li>
                        <li><a className="font-medium text-4xl text-neutral-200 tracking-wide" href="#" onClick={mobileToggle}>About</a></li>
                        <li><a className="font-medium text-4xl text-neutral-200 tracking-wide" href="#" onClick={mobileToggle}>Stack</a></li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>

    </nav>
  )
}

export default Navbar