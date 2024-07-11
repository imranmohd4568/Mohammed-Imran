import React from 'react';
import proj1 from '../assets/proj1.jpeg';
import proj2 from '../assets/proj2.jpeg';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.jpeg';
import proj5 from '../assets/proj5.jpeg';
import proj6 from '../assets/proj6.jpeg';
import proj7 from '../assets/proj7.png';

const Projects = () => {

  const projects = [
    {
      title: "Health-Chain Management system with Challenge-Response Authentication",
      image: proj4,
      description: "Developed a Blockchain-based Decentralized Application for storing and sharing of EMR (Electronic Medical Records) of patients. Also Implemented HMAC(Hash-Based Message Authentication Code) protocol for secure authentication of users.",
      technologies: ["Solidity", "Ethereum", "React.js", "MongoDB", "Node.js"],
      link: 'https://github.com/imranmohd4568/HealthChain-Management-System',
    },
    {
      title: "Blood Bank Website",
      image: proj3,
      description: "Carried out front-end development of Blood-Bank website using React.js along with tailwind css library, customizing the same to the necessary requirements. Developed responsive pages for Admin with dashboard and donors for registering and accessing profiles.",
      technologies: ["React.js", "MySQL", "SpringBoot"],
      link: 'https://github.com/imranmohd4568/Blood-bank',
    },
    {
      title: "Early Detection of Heart Disease",
      image: proj2,
      description: "Developed a Machine learning models that can predict the presence or absence of heart disease in patients based on their clinical and demographic information using the dataset. Perceptron, KNN, AdaBoost, CatBoost models have been to detect the heart disease and concluded the best predictive model among them based on their performance metrics.",
      technologies: ["Machine Learning", "Python"],
      link: 'https://github.com/imranmohd4568/ML-for-Sustainable-Development-Goals-SDG-s-',
    },
    {
      title: "Tokenized Art & Collectibles Marketplace",
      image: proj5,
      description: "Developed a Decentralized application based on blockchain, wherein a user can mint, buy and sell art and collectibles. Done this using solidity for smart contracts,testing and deploying using Hardhat with Typescript through Infura and front-end using Next.js.",
      technologies: ["Solidity", "Typescript", "Hardhat", "Next.js", "Graphs"],
      link: 'https://github.com/imranmohd4568/Art-Marketplace-DApp',
    },
    {
      title: "Web Implementation of Convex Hull",
      image: proj6,
      description: "Carried out the web- implementation of Convex Hull using Kirk Patrick Siedel and Jarvis March Algorithms in JavaScript. An interactive user interface has been developed to visualize the formation of convex hull.",
      technologies: ["Javascript", "Data Structures and Algorithms"],
      link: 'https://github.com/imranmohd4568/Convex-hull-visualization',
    },
    {
      title: "Supply Chain Management System",
      image: proj1,
      description: "Developed a SCM system for a manufacturing company which checks the prevention of errors in reaching the product to the clients through distributors. Implemented Proof of Stake( PoS) consensus algorithm, Merkle tree, and QR code system.",
      technologies: ["Solidity"],
      link: 'https://github.com/imranmohd4568/Supply-Chain-Management-System',
    },
    {
      title: "Property Rental Agency",
      image: proj7,
      description: "A simple application to mediate management and sharing of properties between owners, tenants and view monthly reports for the property and the tenant.Designed a relational schema and EER model pertaining to the requirements of the rental agency",
      technologies: ["SQL"],
      link: '/Propertyrental.pdf',
      download: true,
    },
  ]

  return (
    <div name="projects" className='w-full text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-2 border-gray-500'>
            Projects
          </p>
          <p className='pt-6 text-gray-500'>
            Check out some of my work here :
          </p>
        </div>
        <div>
          {projects.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <div className='w-full lg:w-1/4 relative group mr-10'>
                {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className='block overflow-hidden'> */}
                  <img
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className='mt-5 mb-3 rounded transition-all duration-300 ease-in-out transform group-hover:opacity-50 w-full h-full'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded'>
                   
                   <a href={project.link} target="_blank" rel="noopener noreferrer" className='block overflow-hidden'>
                    <button className='bg-gradient-to-r from-cyan-700 to-green-400 text-white px-4 py-2 rounded hover:scale-110 duration-300'>
                      View
                    </button>
                    </a>

                  </div>
                {/* </a> */}
              </div>
              <div className='w-full max-w-xl mt-5 lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>
                  {project.title}
                </h6>
                <p className='mb-4 text-gray-400'>
                  {project.description}
                </p>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='mr-2 rounded bg-gray-800 text-green-400 px-2 py-1 text-sm font-medium'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;
