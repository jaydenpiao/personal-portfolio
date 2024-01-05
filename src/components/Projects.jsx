import React from 'react'
import albumnutrition from '../assets/projects/albumnutrition.png'
import asl from '../assets/projects/asl.png'
import atm from '../assets/projects/atm.png'
import gpt from '../assets/projects/gpt.png'
import u4ea from '../assets/projects/u4ea.png'
import poker from '../assets/projects/ubcpoker.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#03fa6e]'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* item */}
                <div style={{backgroundImage: `url(${albumnutrition})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            @albumnutrition
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://www.instagram.com/albumnutrition' target='_blank' rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Instagram</button>
                            </a>       
                            <a href='https://github.com/jaydenpiao/albumnutrition' target='_blank' rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>                   
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${u4ea})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            U4Ea
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://u4ea.onrender.com/' target='_blank' rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Website</button>
                            </a>       
                            <a href='https://github.com/jaydenpiao/tailwind-u4ea' target='_blank' rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>                   
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${gpt})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ChatGPT Clone
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Instagram</button>
                            </a>        */}
                            <a href='https://github.com/jaydenpiao/chatgpt_clone' target='_blank' rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>                   
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${poker})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            UBC Poker Club
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://ubcpokerclub.com/' target='_blank' rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Website</button>
                            </a>       
                            <a href='https://github.com/jaydenpiao/ubc-poker' target='_blank' rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>                   
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${asl})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Sign Language Translator
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://sign-language-translator.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Website</button>
                            </a>       
                            <a href='https://github.com/jaydenpiao/NWHacks' target='_blank' rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>                   
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${atm})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ATM
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Instagram</button>
                            </a>        */}
                            <a href='https://github.com/jaydenpiao/ATM' target='_blank' rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Projects