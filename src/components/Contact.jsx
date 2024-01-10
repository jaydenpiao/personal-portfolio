import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/970d252d-efdf-43f2-978e-4c55aaceceb3' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#4171ff]'>Contact</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-md' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-md' name='message' rows='10' placeholder='Message'></textarea>
            <button className='border-2 rounded-md hover:border-[#4171ff] px-4 py-3 my-8 mx-auto flex items-center transition ease-in-out duration-500'>Submit</button>
        </form>

    </div>
  )
}

export default Contact