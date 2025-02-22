"use client"

import Link from "next/link";
import { useState } from "react"
import { LuMenu } from "react-icons/lu";
import { CgClose } from "react-icons/cg";


const MobileMenu = () => {

    const [isOpen,setIsOpen] = useState(false);
 
    const handleToggle = () => {
       return setIsOpen((prev) => !prev)
    } 
  return (
    <>
    <div className='flex flex-col gap-[4px] cursor-pointer md:hidden ' onClick={handleToggle}>
        {/* <div className="w-6 h-1 bg-pink-600 rounded-sm"/>
        <div className="w-6 h-1 bg-pink-600 rounded-sm"/>
        <div className="w-6 h-1 bg-pink-600 rounded-sm"/> */}
        {
        isOpen ? <CgClose className=" text-pink-600 text-2xl "/> :  <LuMenu className="text-pink-600 text-2xl "/> 
    }
    </div> 

    
    {
        isOpen && (
            <div className="absolute w-full left-0 top-24 h-[calc(100vh-96px)] flex flex-col items-center justify-evenly gap-8 font-medium bg-pink-100 text-pink-600 text-xl lg:hidden z-50">
            <Link href={"/"} className="">Home</Link>
            <Link href={"/"}>Friends</Link>
            <Link href={"/"}>Groups</Link>
            <Link href={"/"}>Stories</Link>
            <Link href={"/"}>Login</Link>
            </div>
        ) 
    }
    </>
  )
  
}

export default MobileMenu