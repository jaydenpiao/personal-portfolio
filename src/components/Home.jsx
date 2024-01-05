import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#03fa6e]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Jayden Piao</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I'm a third year Mathematics student at UBC who is an 
                aspiring software engineer. I specialize in full stack 
                development with an interest in data science.
            </p>
            <div>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#03fa6e] hover:border-[#03fa6e]'>
                <Link to="projects" smooth={true} duration={500}>
                    View Projects
                </Link> 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Home