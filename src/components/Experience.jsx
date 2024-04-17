import React from 'react'
import verse from '../assets/experience/verse.png'
import ubc from '../assets/experience/ubc.png'
import ubcpoker from '../assets/experience/ubcpoker.jpg'
import ubcmint from '../assets/experience/ubcmint.png'
import marrlabs from '../assets/experience/marrlabs.png'


const Experience = () => {
  return (
    <div name='experience' className='w-full min-h-screen pt-20'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#4171ff] cursor-default'>Experience</p>
            </div>

            {/* card */}
            <div className='flex flex-col gap-2 pt-4 cursor-default'>
                {/* company */}
                <div className='flex items-center gap-4'>
                    <img src={marrlabs} alt="marr labs" className='rounded-lg w-12 ml-[-4px]'></img>
                    <h1 className='text-3xl font-bold ml-[-4px]'>Marr Labs (YC W24)</h1>
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
                            MAR 2024 - PRESENT
                        </p>
                        {/* info */}
                        <ul className='list-disc list-outside ml-5 font-medium'>
                            <li className='pb-2 pl-[0px]'>
                                Incoming Summer 2024
                            </li>
                            {/* <li className='pb-2 pl-[0px]'>
                                Leveraged HTML, CSS, JavaScript, React, and Tailwind CSS to create a responsive 
                                and mobile-friendly user experience which improved tournament registration by 10%
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Collaborated with internal stakeholders to ensure the website's content and design 
                                aligned with the club's evolving visions and objectives
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>

            {/* card */}
            <div className='flex flex-col gap-2 pt-4 cursor-default'>
                {/* company */}
                <div className='flex items-center gap-4'>
                    <img src={ubcmint} alt="ubc mint" className='rounded-lg w-12 ml-[-4px]'></img>
                    <h1 className='text-3xl font-bold ml-[-4px]'>UBC MINT</h1>
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
                        <h1 className='font-semibold text-xl'>Software Engineer</h1>
                        {/* date */}
                        <p className='text-gray-400 font-semibold'>
                            MAR 2024 - PRESENT
                        </p>
                        {/* info */}
                        <ul className='list-disc list-outside ml-5 font-medium'>
                            <li className='pb-2 pl-[0px]'>
                                UBC MINT (Multifaceted Innovation in NeuroTechnology) is an engineering design team under UBC BEST (Biomedical Engineering Student Team)
                            </li>
                            {/* <li className='pb-2 pl-[0px]'>
                                Leveraged HTML, CSS, JavaScript, React, and Tailwind CSS to create a responsive 
                                and mobile-friendly user experience which improved tournament registration by 10%
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Collaborated with internal stakeholders to ensure the website's content and design 
                                aligned with the club's evolving visions and objectives
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>

            {/* card */}
            <div className='flex flex-col gap-2 pt-4 cursor-default'>
                {/* company */}
                <div className='flex items-center gap-4'>
                    <img src={ubcpoker} alt="ubc poker" className='rounded-lg w-10'></img>
                    <h1 className='text-3xl font-bold'>UBC Poker Club</h1>
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
                        <h1 className='font-semibold text-xl'>Software Developer</h1>
                        {/* date */}
                        <p className='text-gray-400 font-semibold'>
                            JUN 2023 - PRESENT
                        </p>
                        {/* info */}
                        <ul className='list-disc list-outside ml-5 font-medium'>
                            <li className='pb-2 pl-[0px]'>
                                Developing and maintaining the website to display event registration for 150+ 
                                players, club information, a form for inquiries, and a gallery of previous 
                                tournaments
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Leveraged HTML, CSS, JavaScript, React, and Tailwind CSS to create a responsive 
                                and mobile-friendly user experience which improved tournament registration by 10%
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Collaborated with internal stakeholders to ensure the website's content and design 
                                aligned with the club's evolving visions and objectives
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* card */}
            <div className='flex flex-col gap-2 pt-8 cursor-default'>
                {/* company */}
                <div className='flex items-center gap-4'>
                    <img src={verse} alt="verse" className='rounded-lg w-10'></img>
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
            <div className='flex flex-col gap-2 pt-8 cursor-default'>
                {/* company */}
                <div className='flex items-center gap-4'>
                    <img src={ubc} alt="ubc" className='rounded-lg w-10 pl-[1px]'></img>
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
                            SEPT 2021 - AUG 2022
                        </p>
                        {/* info */}
                        <ul className='list-disc list-outside ml-5 font-medium'>
                            <li className='pb-2 pl-[0px]'>
                                Designed and implemented software for 11 autonomous soccer-playing robots through 
                                CI/CD development with GitHub Actions on a Linux platform
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Engineered Python-based referee leveraging TensorFlow ML models which improved 
                                real-time decision-making in robots by 30%
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Utilized Google Test to enhance system robustness and ensure the delivery of 
                                high-quality software
                            </li>
                            <li className='pb-2 pl-[0px]'>
                                Collaborated in a team with 20+ developers, engaging in technical discussions to 
                                elevate code quality and advance gameplay                        
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