import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
    return (
        <div name='contact' className='w-full flex flex-col items-center p-4 pt-20'>
            <form method='POST' action='https://getform.io/f/970d252d-efdf-43f2-978e-4c55aaceceb3' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#4171ff] cursor-default'>Contact</p>
                </div>
                <input className='bg-[#ccd6f6] p-2 rounded-md' type='text' placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type='email' placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2 rounded-md' name='message' rows='10' placeholder='Message'></textarea>
                <button className='border-2 rounded-md hover:border-[#4171ff] px-4 py-3 my-8 mx-auto flex items-center transition ease-in-out duration-500'>Submit</button>
            </form>

            {/* icons container */}
            <div className='flex justify-center items-center space-x-6 mb-8'>
                <a href='https://www.linkedin.com/in/jaydenpiao/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size={30} />
                </a>
                <a href='https://github.com/jaydenpiao' target='_blank' rel='noopener noreferrer'>
                    <FaGithub size={30} />
                </a>
                <a href='mailto:jaydenpiao@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <HiOutlineMail size={30} />
                </a>
                <a href='https://drive.google.com/file/d/158C8HRuG6MO2WRut0v8WZTCuzyJoVsox/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                    <BsFillPersonLinesFill size={30} />
                </a>
            </div>
        </div>
    )
}

export default Contact