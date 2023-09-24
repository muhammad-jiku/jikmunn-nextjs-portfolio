'use client';

import React from 'react';
// external import
import { motion } from 'framer-motion';
// internal imports
import Skill from './Skill';
import { CustomTexts } from '@/components';
import { staggerContainer } from '@/utils/motion';

const Skills = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='container mx-auto p-3 my-4'
    >
      <CustomTexts title='Skills' />
      <div className='flex flex-col items-center my-4'>
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
