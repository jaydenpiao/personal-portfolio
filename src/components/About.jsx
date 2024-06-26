import React from 'react'
import headshot from '../assets/headshot.jpeg'

const About = () => {
    return (
      <div name='about' className='w-full bg-white cursor-default'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full sm:grid sm:grid-cols-2 grid-cols-1 gap-8'>
            <div className='text-center sm:text-right pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-[#4171ff]'>
                About
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:justify-end flex justify-center'>
                <img src={headshot} alt="headshot" className='w-[500px] h-[500px] object-cover rounded-lg shadow-md shadow-[#4171ff]'></img>
              </div>
              <div>
                <p className='text-xl font-semibold'>
                I'm a full-stack developer with a deep commitment to creating products that
                enhance the lives of those in my community. As a 3rd year Computer Science student
                at the University of British Columbia, I strive to merge my academic pursuits
                with my passion for technology.
                <br />
                <br />
                My dedication to this field is not only shown in my academic endeavors, but 
                also in my personal projects and work for different organizations, where I 
                focus on utilizing my skills to drive positive change.
                <br />
                <br />
                When I'm not engaged in my academic or professional work, you can often find 
                me shredding the slopes ⛷️ or the links 🏌️, winning hands in Poker ♠️, or relaxing to
                some music 🎵!
                </p>  
              </div>
            </div>
        </div>
      </div>
    );
  };

export default About