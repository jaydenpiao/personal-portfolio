import React from 'react'
import { Link } from 'react-scroll'
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <div className='w-full'>
      <Link to="home" smooth={true} duration={500} className='flex flex-col justify-center items-center font-semibold cursor-pointer hover:scale-105 duration-300'>
        <IoIosArrowUp />
        <p>
          Back to the top
        </p>
      </Link>

      <h1 className='font-semibold text-lg text-center pb-10 pt-5'>
        <span>Thanks for visiting </span>
        <span className='home-emoji'>👋</span>
      </h1>
      
    </div>
  )
}

export default Footer