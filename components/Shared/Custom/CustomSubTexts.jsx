'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion';

const CustomSubTexts = ({ title }) => (
  <motion.p
    variants={textContainer}
    className='text-sm sm:text-md md:text-lg text-center md:text-left uppercase font-semibold text-gray-500 pb-2 tracking-[2px] md:tracking-[6px]'
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export default CustomSubTexts;
