import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#03fa6e]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Jayden Piao</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                <TypeAnimation
                    sequence={[
                        "I'm a Junior at UBC",
                        1500,
                        "I'm a Software Engineer",
                        1500,
                        "I'm a Music Lover",
                        1500,
                        "I'm a Poker Player",
                        1500
                    ]}
                    repeat={Infinity}
                />
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                Currently in my third year studying mathematics at the University of British 
                Columbia, I am actively exploring opportunities in software engineering. My 
                aim is to develop my technical skills further and make a positive impact on the 
                community.
            </p>
            <div>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#03fa6e] hover:border-[#03fa6e] transition ease-in-out duration-500 rounded-md'>
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