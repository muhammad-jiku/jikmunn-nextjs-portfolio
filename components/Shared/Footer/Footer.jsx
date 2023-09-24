'use client';

import React from 'react';
// external imports
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
// internal imports
import styles from '@/styles';
import { fromBottomVariants } from '@/utils/motion';
import SocialIcons from '../SocialIcons/SocialIcons';
import GoToTop from '@/components/Shared/ToTheTop/GoToTop';

const Footer = () => {
  const year = new Date()?.getFullYear();
  return (
    <motion.div
      variants={fromBottomVariants}
      initial='hidden'
      whileInView='show'
      className={`pt-6 mt-auto relative`}
    >
      <GoToTop />
      <div className='footer footer-center p-4 glass'>
        <div>
          <div>
            <SocialIcons />
          </div>
          <p>
            Copyright &copy; {year} - All right reserved by{' '}
            <span
              className='text-xs text-primary font-extrabold sm:text-sm md:text-xl'
              // style={{ fontFamily: 'Comfortaa' }}
            >
              {' '}
              Muhammad Azizul Hoque Jiku{' '}
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
