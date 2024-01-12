import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-white cursor-default'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold pb-5'>
                <span>Hi </span>
                <span className='home-emoji'>👋</span>
                <span>, I'm Jayden Piao</span>
            </h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#4171ff]'>
                <TypeAnimation
                    sequence={[
                        "a Junior at UBC",
                        1500,
                        "a Software Engineer",
                        1500,
                        "a Music Lover",
                        1500,
                        "a Poker Player",
                        1500,
                        "a Car Enthusiast",
                        1500,
                        "a Sports Fanatic",
                        1500
                    ]}
                    repeat={Infinity}
                />
            </h2>
            <p className='py-4 max-w-[700px] font-medium text-lg'>
                Currently in my third year studying Mathematics at the University of British 
                Columbia, I am actively exploring opportunities in software engineering. My 
                aim is to develop my technical skills further and make a positive impact on the 
                community.
            </p>
            <div>
                <button className='font-semibold group border-2 px-6 py-3 my-2 flex items-center hover:border-[#4171ff] transition ease-in-out duration-500 rounded-md'>
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