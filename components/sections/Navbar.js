import { useState, useEffect } from "react"
import Link from "next/link"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { FaMapSigns, FaUpload } from "react-icons/fa";
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextcolor] = useState('text-gray-900')
    const HandleNav = () => {
        setNav(!nav)
    } 
    useEffect(()=>{
        const changeColor = () => {
            if (window.scrollY>=10) {
                setColor('backdrop-blur bg-white/50')

            }
            else {
                setColor('bg-transparent')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

  return (
    <div  className={`${color} fixed top-0 left-0 w-full uppercase z-10 ease-in duration-300`}>
        <div className="max-w-[1920px] m-auto lg:mx-10 flex justify-between items-center p-4">
            <div className="flex justify-between">
                <Link className="mt-2 mr-16" href='/'>
                    <h1 style={{color: `${textColor}`}} className="font-extrabold normal-case text-5xl">JiJi24</h1>
                </Link>
                <ul style={{color: `${textColor}`}} className="hidden sm:flex ">
                    <li className="p-5">
                        <Link className="hover-olive" href='/#date'>Save The Date</Link>
                    </li>
                    <li className="p-5">
                        <Link className="hover-olive" href='/#story'>Our Story</Link>
                    </li>
                    <li className="p-5">
                        <Link className="hover-olive" href='/#gallery'>Photo Gallery</Link>
                    </li>
                </ul>

            </div>
            <div className="flex">
            <Link className="py-5 hidden sm:flex hover:text-[#f1c4ba]" href='/share'>Share your memories <FaUpload className="m-1" /></Link>
            <p className="py-5 px-2 hidden sm:flex font-extrabold">|</p>
            <Link className="py-5 hidden sm:flex hover:text-[#f1c4ba]" href='/#directions'>Directions <FaMapSigns className="m-1" /></Link>

            </div>
            <div className="sm:hidden block z-10">
                { nav ? <AiOutlineClose size={20} onClick={HandleNav}  style={{color: `white`}}/> : <AiOutlineMenu size={20}  onClick={HandleNav}  style={{color: `${textColor}`}}/>}
                
            </div>
            <div className={nav ?"sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-gray-100": "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" }>
                <ul>
                    <li onClick={HandleNav}  className="p-5 text-4xl">
                        <Link className="hover-olive" href='/#date'>Save the date</Link>
                    </li>
                    <li onClick={HandleNav}  className="p-5 text-4xl">
                        <Link className="hover-olive" href='/#story'>our story</Link>
                    </li>
                    <li onClick={HandleNav}  className="p-5 text-4xl">
                        <Link className="hover-olive" href='/#gallery'>photo Gallery</Link>
                    </li>
                    <li onClick={HandleNav}  className="p-5 text-4xl">
                        <Link className="hover-olive" href='/share'>Share your memories</Link>
                    </li>
                    <li onClick={HandleNav}  className="p-5 text-4xl">
                        <Link className="hover-olive" href='/#directions'>Directions</Link>
                    </li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Navbar