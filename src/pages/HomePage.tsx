import Navbar from '../components/Navbar'
import './HomePage.css'
import Socials from "../components/Socials"
import { Outlet } from 'react-router'


const HomePage = () => {


  return (
    <div className="lg:p-5 bg-[#2500dd] h-screen">
        <Navbar/>
        <Outlet/>
        <Socials/>
    </div>
  )
}

export default HomePage