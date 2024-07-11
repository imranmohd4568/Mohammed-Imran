import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full py-10  text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8' >
                <p className='text-4xl font-bold inline border-b-2 border-gray-500'>
                    About
                </p>
            </div>
            <p className=' text-gray-400 mt-4'>
                Hello! I'm Mohammed Imran, currently pursuing my undergraduate degree in Computer Science at Birla Institute of Technology and Science,Pilani, Hyderabad campus. As a passionate student, I am deeply engrossed in the vast and ever-evolving world of technology.My academic journey has equipped me with a strong foundation in various programming languages and technologies.Beyond academics, I have a variety of hobbies that keep me balanced and inspired i.e, Music, Art, Indoor games like carrom, chess etc.I am constantly seeking opportunities to expand my knowledge and skills.In summary, my journey as a computer science undergraduate is driven by a passion for technology and a commitment to continuous learning. I am excited about the endless possibilities that the future holds and am eager to make meaningful contributions to the field of computer science.
            </p>

        </div>
        {/* <hr className="w-1/2 h-px mx-30 border-0 bg-gray-500 bg-opacity-50" /> */}
    </div>
    
  )
}

export default About
