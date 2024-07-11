import React from 'react'

const Experience = () => {

    const Experiences =[
        {
            year:"May 2023- Aug 2023",
            role:"Full-stack Web Developer",
            company:"Nirmaan Organization, Hyderabad (on-site)",
            description:`Worked as Full-Stack Web Developer and carried out the development of the website Blood-Bank for the organization.Blood-Bank is an end to end, web application that stores the information of registered Donors, Patients fully authorized by Admin`,
            technologies:["React.js", "MySQL","SpringBoot"]
        }
    ];
  return (
    <div name="experience" className=' w-full text-white '>
        <div className='max-w-screen-lg p-4 mx-auto justify-center w-full h-full'>
            <div className='pb-8'>
                <h1 className='text-4xl font-bold inline border-b-2  border-gray-500'>Experience </h1>
                <div className='mt-4 '>
                    {Experiences.map((experience, index)=>
                    (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                            <div className='w-full lg:w-1/4'>
                                <h3 className='mb-2 mt-14 font-semibold text-white'>{experience.year}</h3>
                            </div>
                            <div className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold'>{experience.role} at {" "}
                                    <span className='text-sm'>
                                        {experience.company}
                                    </span>
                                </h6>
                                <p className='mb-4 text-gray-400'>
                                    {experience.description}
                                </p>
                                {experience.technologies.map((tech,index)=> (
                                    <span key={index} className='mr-2 mt-4 rounded bg-gray-800 px-2 py-1 text-sm font-medium text-green-400'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
