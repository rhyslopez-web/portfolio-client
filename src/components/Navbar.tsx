import { useState } from "react"
import { PlusIcon, MinusIcon } from "lucide-react"
import gsap from "gsap/all"
import { useGSAP } from "@gsap/react"

const Navbar = () => {

    const [mobileMenu,setMobileMenu] = useState(false)

    const mobileToggle = () => {
        setMobileMenu(!mobileMenu)
    }

    useGSAP(() => {
        {mobileMenu
        ?
        gsap.from('#mobileNav', {
            y: 1000,
            duration: 2
        })

        :

        ""
        }
    })
    
  return (
    <nav className="lg:px-10 lg:py-7 fixed lg:top-5 left-0 right-0 z-50">
        <ul className="hidden lg:flex justify-end lg:gap-2">
            <li>
                <a href="" className="border border-primary-blue text-primary-blue px-5 py-2 rounded-full backdrop-blur-sm">Projects</a>
            </li>
            <li>
                <a href="" className="border border-primary-blue text-primary-blue px-5 py-2 rounded-full backdrop-blur-sm">About</a>
            </li>
            <li>
                <a href="" className="border border-primary-blue text-primary-blue px-5 py-2 rounded-full backdrop-blur-sm">Stack</a>
            </li>
        </ul>

        <div>
            <button onClick={mobileToggle} className="lg:hidden flex justify-center items-center gap-1 border border-primary-blue 
            bg-primary-blue text-white rounded-full px-4 py-2 fixed top-5 right-5 drop-shadow-lg">
            Menu {mobileMenu ? <MinusIcon/> : <PlusIcon/>}
            </button>
        </div>

        {mobileMenu && (
            <div id="mobileNav" className="lg:hidden h-screen bg-primary-blue flex justify-center items-center">
                <ul className="flex flex-col gap-2">
                    <li><a className="font-medium text-4xl text-neutral-200 tracking-wide" href="#" onClick={mobileToggle}>Projects</a></li>
                    <li><a className="font-medium text-4xl text-neutral-200 tracking-wide" href="#" onClick={mobileToggle}>About</a></li>
                    <li><a className="font-medium text-4xl text-neutral-200 tracking-wide" href="#" onClick={mobileToggle}>Stack</a></li>
                </ul>
            </div>
        )}

    </nav>
  )
}

export default Navbar