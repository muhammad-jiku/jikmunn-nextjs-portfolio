'use client';

import React, { useEffect } from 'react';
// external import
import { motion } from 'framer-motion';
// internal imports
import DetailsDemo from './Details/DetailsDemo';
import DetailsText from './Details/DetailsText';
import { staggerContainer } from '@/utils/motion';
import { handleDisableRightClick } from '@/utils/handleRightClick';

const ProjectDetails = ({ projectInfo }) => {
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
      className='container mx-auto my-4 min-h-screen'
    >
      <DetailsDemo projectInfo={projectInfo} />
      <DetailsText projectInfo={projectInfo} />
    </motion.div>
  );
};

export default ProjectDetails;
