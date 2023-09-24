'use client';

import React, { useEffect } from 'react';
// external import
import { motion } from 'framer-motion';
// internal imports
import { projectsData } from '@/db';
import { CustomTexts, CustomProjectCard } from '..';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { handleDisableRightClick } from '@/utils/handleRightClick';

const Projects = () => {
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
        <div className='hero-content flex flex-col p-3'>
          <CustomTexts title='All Projects' />
          <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
            <div className='container mx-auto my-10 p-2 grid grid-cols-1 lg:grid-cols-3 gap-5'>
              {projectsData.map((project, idx) => (
                <CustomProjectCard key={idx} project={project} idx={idx} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
