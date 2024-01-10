import React from 'react'
import HTML from '../assets/skills/html.png'
import verse from '../assets/experience/verse.png'
import tbots from '../assets/experience/tbots.webp'


const Experience = () => {
  return (
    <div name='experience' className='w-full min-h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#4171ff]'>Experience</p>
            </div>
            {/* card */}
            <div className='flex flex-col gap-2 pt-4'>
                {/* company */}
                <div className='flex items-center gap-4'>
                    <img src={verse} className='rounded-lg w-10'></img>
                    <h1 className='text-3xl font-bold'>The Verse</h1>
                </div>
                {/* role */}
                <div className='ml-[11px] flex items-stretch gap-5'>
                    {/* timeline */}
                    <div className='flex flex-col items-center ml-1'>
                        {/* dot */}
                        <div className='w-3 h-3  bg-[#4171ff] rounded-lg mt-[7px] mb-1'></div>
                        {/* line */}
                        <div className='w-[2px] bg-[#4171ff] flex-grow'></div>
                    </div>
                    {/* title */}
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-semibold text-xl'>Software Engineer Intern</h1>
                        {/* date */}
                        <p className='text-gray-400 font-semibold'>
                            MAY 2023 - AUG 2023
                        </p>
                        {/* info */}
                        <ul className='list-disc list-outside ml-5 font-medium'>
                            <li className='pb-2 pl-[0px]'>
                                Developed 'U4Ea Labels', a MERN stack application that conducts sentimental 
                                musical analysis and generates nutritional artwork for 37,000+ customers
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Leveraged the Musixmatch API for lyric retrieval and Python alongside Flask for 
                                sound frequency generation
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Conducted weekly scrum meetings with the founders and recruited a front-end 
                                developer, back-end developer, UI/UX designer, and UX Researcher to assist with
                                production and maintenance with the goal of monetization
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Constructed an internal management tool to track user activity and engagement 
                                with two engineers while utilizing a RESTful API along with the Discord API
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* card */}
            <div className='flex flex-col gap-2 pt-8'>
                {/* company */}
                <div className='flex items-center gap-4'>
                    <img src={tbots} className='rounded-lg h-10 mb-1'></img>
                    <h1 className='text-3xl font-bold'>UBC Thunderbots</h1>
                </div>
                {/* role */}
                <div className='ml-[11px] flex items-stretch gap-5'>
                    {/* timeline */}
                    <div className='flex flex-col items-center ml-1'>
                        {/* dot */}
                        <div className='w-3 h-3  bg-[#4171ff] rounded-lg mt-[7px] mb-1'></div>
                        {/* line */}
                        <div className='w-[2px] bg-[#4171ff] flex-grow'></div>
                    </div>
                    {/* title */}
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-semibold text-xl'>Junior Software Developer</h1>
                        {/* date */}
                        <p className='text-gray-400 font-semibold'>
                            MAY 2023 - AUG 2023
                        </p>
                        {/* info */}
                        <ul className='list-disc list-outside ml-5 font-medium'>
                            <li className='pb-2 pl-[0px]'>
                                Developed 'U4Ea Labels', a MERN stack application that conducts sentimental 
                                musical analysis and generates nutritional artwork for 37,000+ customers
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Leveraged the Musixmatch API for lyric retrieval and Python alongside Flask for 
                                sound frequency generation
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Conducted weekly scrum meetings with the founders and recruited a front-end 
                                developer, back-end developer, UI/UX designer, and UX Researcher to assist with
                                production and maintenance with the goal of monetization
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Constructed an internal management tool to track user activity and engagement 
                                with two engineers while utilizing a RESTful API along with the Discord API
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* card */}
            <div className='flex flex-col gap-2 pt-8'>
                {/* company */}
                <div className='flex items-center gap-4'>
                    <img src={verse} className='rounded-lg w-10'></img>
                    <h1 className='text-3xl font-bold'>The Verse</h1>
                </div>
                {/* role */}
                <div className='ml-[11px] flex items-stretch gap-5'>
                    {/* timeline */}
                    <div className='flex flex-col items-center ml-1'>
                        {/* dot */}
                        <div className='w-3 h-3  bg-[#4171ff] rounded-lg mt-[7px] mb-1'></div>
                        {/* line */}
                        <div className='w-[2px] bg-[#4171ff] flex-grow'></div>
                    </div>
                    {/* title */}
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-semibold text-xl'>Software Engineer Intern</h1>
                        {/* date */}
                        <p className='text-gray-400 font-semibold'>
                            MAY 2023 - AUG 2023
                        </p>
                        {/* info */}
                        <ul className='list-disc list-outside ml-5 font-medium'>
                            <li className='pb-2 pl-[0px]'>
                                Developed 'U4Ea Labels', a MERN stack application that conducts sentimental 
                                musical analysis and generates nutritional artwork for 37,000+ customers
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Leveraged the Musixmatch API for lyric retrieval and Python alongside Flask for 
                                sound frequency generation
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Conducted weekly scrum meetings with the founders and recruited a front-end 
                                developer, back-end developer, UI/UX designer, and UX Researcher to assist with
                                production and maintenance with the goal of monetization
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Constructed an internal management tool to track user activity and engagement 
                                with two engineers while utilizing a RESTful API along with the Discord API
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience