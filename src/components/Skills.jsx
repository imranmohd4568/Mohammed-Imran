import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { SiCplusplus } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';
import { DiMongodb } from 'react-icons/di';

import { motion } from "framer-motion";

const iconVariants = (duration) => ({

                initial: { y: -10 },
                animate: {
                y: [10, -10],
                transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType:"reverse",
                }
                },
                });

const Skills = () => {
  return (
    <div  name="skills" className='w-full text-white pb-6'>
      <div className='max-w-screen-lg p-4 pb-0 mb-0 mx-auto justify-center w-full h-full'>
        <div className=''>
          <h1 className='text-4xl font-bold inline border-b-2 border-gray-500'>
            Skills
          </h1>
          <div className='flex flex-wrap items-center justify-center gap-4 mt-8'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
              <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
              <FaNodeJs className='text-7xl text-green-800'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>   
              <BiLogoTailwindCss className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
              <SiCplusplus className='text-7xl text-violet-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
              <FaPython className='text-7xl text-yellow-300'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
              <TbSql className='text-7xl text-orange-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
              <DiMongodb className='text-7xl text-green-500'/>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
