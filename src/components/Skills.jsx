import React from 'react'
import CPP from '../assets/skills/cpp.png'
import CSS from '../assets/skills/css.png'
import HTML from '../assets/skills/html.png'
import Java from '../assets/skills/java.png'
import JavaScript from '../assets/skills/javascript.png'
import Mongo from '../assets/skills/mongo.png'
import Node from '../assets/skills/node.png'
import Python from '../assets/skills/python.png'
import ReactImg from '../assets/skills/react.png'
import Tailwind from '../assets/skills/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-white'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#4171ff]'>Skills</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#4171ff] hover:scale-110 duration-500 pt-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-3'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#4171ff] hover:scale-110 duration-500 pt-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-3'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#4171ff] hover:scale-110 duration-500 pt-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-3'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-[#4171ff] hover:scale-110 duration-500 pt-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className='my-3'>React</p>
                </div>

                <div className='shadow-md shadow-[#4171ff] hover:scale-110 duration-500 pt-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                    <p className='my-3'>Node.js</p>
                </div>

                <div className='shadow-md shadow-[#4171ff] hover:scale-110 duration-500 pt-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                    <p className='my-3'>MongoDB</p>
                </div>

                <div className='shadow-md shadow-[#4171ff] hover:scale-110 duration-500 pt-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-3'>Tailwind CSS</p>
                </div>

                <div className='shadow-md shadow-[#4171ff] hover:scale-110 duration-500 pt-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                    <p className='my-3'>Python</p>
                </div>

                <div className='shadow-md shadow-[#4171ff] hover:scale-110 duration-500 pt-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                    <p className='my-3'>Java</p>
                </div>

                <div className='shadow-md shadow-[#4171ff] hover:scale-110 duration-500 pt-2 rounded-lg'>
                    <img className='w-20 mx-auto' src={CPP} alt="CPP icon" />
                    <p className='my-3'>C++</p>
                </div>
            </div>

            
        </div>
        
    </div>
  )
}

export default Skills