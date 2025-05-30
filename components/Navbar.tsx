import React from 'react'
import { RiNextjsFill } from 'react-icons/ri'
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="z-10 top-10 left-1/2 -translate-x-1/2 fixed flex items-center gap-5 py-2 px-4 rounded-full bg-black/60 backdrop-blur-md border text-white border-zinc-800 text-xs">
      <a href=""> 
        <RiNextjsFill className="text-2xl"> </RiNextjsFill>
      </a>
    
        <Link href="/" className="hover:text-gray-300 transition-colors">  
            <span> Home </span>
        </Link>
        <Link href="/" className="hover:text-gray-300 transition-color">
            <span> About </span>
        </Link>   
        <Link href="/" className="hover:text-gray-300 transition-color">   <span> Projects </span>
        </Link>
        <Link href="/" className="hover:text-gray-300 transition-color">  <span> Contact  </span>
        </Link>
    </nav>

  )
}

export default Navbar
