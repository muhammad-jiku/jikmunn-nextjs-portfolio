'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';
import DetailsDemo from './Details/DetailsDemo';

const ProjectDetails = ({ projectInfo }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='container mx-auto my-4 min-h-screen'
    >
      <DetailsDemo projectInfo={projectInfo} />
    </motion.div>
  );
};

export default ProjectDetails;
