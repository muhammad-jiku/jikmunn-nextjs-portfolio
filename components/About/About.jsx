'use client';

import React, { useEffect } from 'react';
// external imports
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
// internal imports
import AboutText from './AboutText';
import me from '../../assets/images/display/me.jpg';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { handleDisableRightClick } from '@/utils/handleRightClick';

const About = () => {
  useEffect(() => {
    // disable right click
    document.addEventListener('contextmenu', handleDisableRightClick);

    // enable right click
    // document.removeEventListener('contextmenu', handleDisableRightClick);
  }, []);

  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='container mx-auto my-4'
    >
      <div className='hero min-h-screen'>
        <div className='hero-content flex flex-col md:flex-row p-6'>
          <motion.img
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className='mask mask-diamond shadow-2xl h-64 md:h-72 lg:h-80'
            src={me.src}
            alt='Muhammad Azizul Hoque Jiku'
          />

          <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
            <AboutText />
            <a
              href={
                'https://drive.google.com/file/d/11G5T7o0L3YRpC5ONa7q5u0LEgdfXlL_1/view?usp=share_link'
              }
              target='_blank'
              rel='noreferrer'
              className='ml-2'
            >
              <button className='btn glass btn-md p-2'>
                {' '}
                Download Resume <FiDownload className='ml-2 text-lg' />
              </button>{' '}
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
