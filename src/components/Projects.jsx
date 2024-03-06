import React from 'react'
import albumnutrition from '../assets/projects/albumnutrition.png'
import asl from '../assets/projects/asl.png'
import atm from '../assets/projects/atm.png'
import gpt from '../assets/projects/gpt.png'
import u4ea from '../assets/projects/u4ea.png'
import poker from '../assets/projects/ubcpoker.png'
import vita from '../assets/projects/vita.png'
import melodybrush from '../assets/projects/melodybrush.png'

import python from '../assets/skills/python.png'
import javascript from '../assets/skills/javascript.png'
import java from '../assets/skills/java.png'
import node from '../assets/skills/node.png'
import express from '../assets/skills/express.png'
import mongodb from '../assets/skills/mongo.png'
import react from '../assets/skills/react.png'
import tailwind from '../assets/skills/tailwind.png'
import vite from '../assets/skills/vite.png'
import openai from '../assets/skills/openai.png'
import ts from '../assets/skills/ts.png'
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import tensorflow from '../assets/skills/tensorflow.png'
import figma from '../assets/skills/figma.png'
import firebase from '../assets/skills/firebase.png'
import aws from '../assets/skills/aws.png'



const Projects = () => {
  return (
    <div name='projects' className='w-full bg-white cursor-default pt-10'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#4171ff]'>Projects</p>
            </div>

            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* item */}
                <div style={{backgroundImage: `url(${melodybrush})`}}
                className='relative square-container shadow-lg shadow-[#4171ff] group container rounded-md mx-auto content-div text-center'>

                    {/* hover effect */}
                    <div className='absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            melodybrush
                        </span>
                        <div className='pt-4 flex'>
                            <span>
                                <img className='w-8 ml-1' src={react} alt="react icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={javascript} alt="js icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={python} alt="python icon"></img>
                            </span>
                            <span>
                                <img className='h-5 mt-1.5 ml-1' src={aws} alt="aws icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={tailwind} alt="tailwind icon"></img>
                            </span>
                        </div>
                        <div className='pt-4 text-center'> 
                            <a href='https://github.com/aradsab/MusicArt-CIC-hackathon' target='_blank' rel='noopener noreferrer'>
                                <button className='border-2 text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg hover:border-[#4171ff] transition ease-in-out duration-500'>Code</button>
                            </a>                   
                        </div>
                    </div>
                </div>

                {/* item */}
                <div style={{backgroundImage: `url(${vita})`}}
                className='relative square-container shadow-lg shadow-[#4171ff] group container rounded-md mx-auto content-div text-center'>

                    {/* hover effect */}
                    <div className='absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Vita
                        </span>
                        <div className='pt-4 flex'>
                            <span>
                                <img className='w-8' src={ts} alt="ts icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={react} alt="react icon"></img>
                            </span>
                            <span>
                                <img className='w-8' src={firebase} alt="firebase icon"></img>
                            </span>
                            <span>
                                <img className='w-8' src={python} alt="python icon"></img>
                            </span>
                            <span>
                                <img className='w-7 ml-1' src={tensorflow} alt="tensorflow icon"></img>
                            </span>
                            <span>
                                <img className='w-8' src={figma} alt="figma icon"></img>
                            </span>
                        </div>
                        <div className='pt-4 text-center'>
                            <a href='https://devpost.com/software/vita-paxt8v?ref_content=user-portfolio&ref_feature=in_progress' target='_blank' rel='noopener noreferrer'>
                                <button className='border-2 text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg hover:border-[#4171ff] transition ease-in-out duration-500'>DevPost</button>
                            </a>       
                            <a href='https://github.com/jaydenpiao/Vita' target='_blank' rel='noopener noreferrer'>
                                <button className='border-2 text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg hover:border-[#4171ff] transition ease-in-out duration-500'>Code</button>
                            </a>                   
                        </div>
                    </div>
                </div>

                {/* item */}
                <div style={{backgroundImage: `url(${albumnutrition})`}}
                className='relative square-container shadow-lg shadow-[#4171ff] group container rounded-md mx-auto content-div text-center'>

                    {/* hover effect */}
                    <div className='absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            @albumnutrition
                        </span>
                        <div className='pt-4 flex'>
                            <span>
                                <img className='w-8' src={python} alt="python icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={javascript} alt="js icon"></img>
                            </span>
                            <span>
                                <img className='w-8' src={figma} alt="figma icon"></img>
                            </span>
                        </div>
                        <div className='pt-4 text-center'>
                            <a href='https://www.instagram.com/albumnutrition' target='_blank' rel='noopener noreferrer'>
                                <button className='border-2 text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg hover:border-[#4171ff] transition ease-in-out duration-500'>Instagram</button>
                            </a>       
                            <a href='https://github.com/jaydenpiao/albumnutrition' target='_blank' rel='noopener noreferrer'>
                                <button className='border-2 text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg hover:border-[#4171ff] transition ease-in-out duration-500'>Code</button>
                            </a>                   
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${u4ea})`}}
                className='relative square-container shadow-lg shadow-[#4171ff] group container rounded-md mx-auto content-div text-center'>

                {/* hover effect */}
                <div className='absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            U4Ea
                        </span>
                        <div className='pt-4 flex'>
                            <span>
                                <img className='w-8' src={python} alt="python icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={javascript} alt="js icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={react} alt="react icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={node} alt="react icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1 mt-2' src={express} alt="express icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={mongodb} alt="mongodb icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={tailwind} alt="tailwind icon"></img>
                            </span>
                        </div>
                        <div className='pt-4 text-center'>
                            <a href='https://u4ea.onrender.com/' target='_blank' rel='noopener noreferrer'>
                                <button className='border-2 text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg hover:border-[#4171ff] transition ease-in-out duration-500'>Website</button>
                            </a>       
                            <a href='https://github.com/jaydenpiao/tailwind-u4ea' target='_blank' rel='noopener noreferrer'>
                                <button className='border-2 text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg hover:border-[#4171ff] transition ease-in-out duration-500'>Code</button>
                            </a>                   
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${gpt})`}}
                className='relative square-container shadow-lg shadow-[#4171ff] group container rounded-md mx-auto content-div text-center'>

                {/* hover effect */}
                <div className='absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ChatGPT Clone
                        </span>
                        <div className='pt-4 flex'>
                            <span>
                                <img className='w-8' src={ts} alt="ts icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={react} alt="react icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={vite} alt="vite icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={node} alt="node icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1 mt-2' src={express} alt="express icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={mongodb} alt="mongodb icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={openai} alt="openai icon"></img>
                            </span>
                        </div>
                        <div className='pt-4 text-center'>
                            {/* <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Instagram</button>
                            </a>        */}
                            <a href='https://github.com/jaydenpiao/chatgpt_clone' target='_blank' rel='noopener noreferrer'>
                                <button className='border-2 text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg hover:border-[#4171ff] transition ease-in-out duration-500'>Code</button>
                            </a>                   
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${poker})`}}
                className='relative square-container shadow-lg shadow-[#4171ff] group container rounded-md mx-auto content-div text-center'>

                {/* hover effect */}
                <div className='absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            UBC Poker Club
                        </span>
                        <div className='pt-4 flex'>
                            <span>
                                <img className='w-8 ml-1' src={react} alt="react icon"></img>
                            </span>
                            <span>
                                <img className='w-8' src={html} alt="HTML icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={css} alt="css icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={javascript} alt="js icon"></img>
                            </span>
                            
                            <span>
                                <img className='w-8 ml-1' src={tailwind} alt="tailwind icon"></img>
                            </span>
                        </div>
                        <div className='pt-4 text-center'>
                            <a href='https://ubcpokerclub.com/' target='_blank' rel='noopener noreferrer'>
                                <button className='border-2 text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg hover:border-[#4171ff] transition ease-in-out duration-500'>Website</button>
                            </a>       
                            <a href='https://github.com/jaydenpiao/ubc-poker' target='_blank' rel='noopener noreferrer'>
                                <button className='border-2 text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg hover:border-[#4171ff] transition ease-in-out duration-500'>Code</button>
                            </a>                   
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${asl})`}}
                className='relative square-container shadow-lg shadow-[#4171ff] group container rounded-md mx-auto content-div text-center'>

                {/* hover effect */}
                <div className='absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Sign Language Translator
                        </span>
                        <div className='pt-4 flex'>
                            <span>
                                <img className='w-8' src={html} alt="HTML icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={css}alt="css icon"></img>
                            </span>
                            <span>
                                <img className='w-8 ml-1' src={javascript} alt="js icon"></img>
                            </span>
                            <span>
                                <img className='w-7 ml-1' src={tensorflow} alt="tensorflow icon"></img>
                            </span>
                        </div>
                        <div className='pt-4 text-center'>
                            <a href='https://sign-language-translator.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                <button className='border-2 text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg hover:border-[#4171ff] transition ease-in-out duration-500'>Website</button>
                            </a>       
                            <a href='https://github.com/jaydenpiao/NWHacks' target='_blank' rel='noopener noreferrer'>
                                <button className='border-2 text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg hover:border-[#4171ff] transition ease-in-out duration-500'>Code</button>
                            </a>                   
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${atm})`}}
                className='relative square-container shadow-lg shadow-[#4171ff] group container rounded-md mx-auto content-div text-center'>

                {/* hover effect */}
                <div className='absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ATM
                        </span>
                        <div className='pt-4 flex'>
                            <span>
                                <img className='w-8' src={java} alt="java icon"></img>
                            </span>
                        </div>
                        <div className='pt-4 text-center'>
                            {/* <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Instagram</button>
                            </a>        */}
                            <a href='https://github.com/jaydenpiao/ATM' target='_blank' rel='noopener noreferrer'>
                                <button className='border-2 text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg hover:border-[#4171ff] transition ease-in-out duration-500'>Code</button>
                                
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