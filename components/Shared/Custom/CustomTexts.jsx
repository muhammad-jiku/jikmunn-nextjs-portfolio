'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion';

const CustomTexts = ({ title }) => (
  <motion.p
    variants={textContainer}
    className='text-lg md:text-2xl text-center md:text-left uppercase font-semibold text-gray-500 pb-2 tracking-[10px] md:tracking-[8px]'
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export default CustomTexts;
