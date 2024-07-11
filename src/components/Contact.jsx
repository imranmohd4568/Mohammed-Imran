import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen  p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-2 border-gray-500'>
                    Contact
                </p>
                <p className='py-6 text-gray-400 '>Let's get in touch !!!</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/brolldna' method='POST'  className='flex flex-col w-full md:w-1/2'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                        <input
                        type='text'
                        name='email'
                        placeholder='Enter your email'
                        className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                        <textarea 
                        placeholder='Enter your message'
                        name='message' rows={10} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                        </textarea>
                        <button className='text-white bg-gradient-to-r from-cyan-700 to-green-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                            Send
                        </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
