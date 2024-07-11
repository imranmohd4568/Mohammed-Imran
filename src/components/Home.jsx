import React from 'react';
import HeroImage from '../assets/hero2.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  },
});

const Home = () => {
  return (
    <div name="home" className='min-h-screen flex items-center w-full'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row gap-0 items-center justify-center h-full px-4'>
        {/* Image */}
        <div className="self-start md:self-center md:w-1/2 w-full flex justify-center md:justify-start"> 
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={HeroImage} alt="myprofile" className="hero-image rounded-xl w-4/5 md:w-4/6 mx-auto md:mx-0" />
        </div>
        {/* Content */}
        <div className='flex flex-col mt-4 justify-center md:w-1/2'>
          <motion.h2
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className='text-4xl sm:text-7xl font-bold text-white'>
            Mohammed Imran
          </motion.h2>
          <motion.p
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className='text-gray-500 py-4 max-w-md'>
            I'm a full stack developer with a passion for building amazing products. I have good experience in this field.
          </motion.p>
          <motion.div
            variants={container(0)}
            initial="hidden"
            animate="visible">
            <Link to='projects' smooth={true} duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-green-400 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
