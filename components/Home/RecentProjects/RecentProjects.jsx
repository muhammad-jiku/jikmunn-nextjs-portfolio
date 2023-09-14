'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';
import { CustomTexts } from '@/components';

const RecentProjects = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='container mx-auto p-3 my-6'
    >
      <CustomTexts title='Recent Projects' />
      <h1>Projects</h1>
    </motion.div>
  );
};

export default RecentProjects;
