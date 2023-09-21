'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { CustomTexts } from '@/components';
import Link from 'next/link';
import { projectsData } from '@/db';
import CustomProjectCard from '@/components/Shared/Custom/CustomProjectCard';
import { AiOutlineArrowRight } from 'react-icons/ai';

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
      <div className='container mx-auto my-10 p-2 grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {projectsData.slice(0, 3).map((project, idx) => (
          // {projectsData.slice(-3).map((project, idx) => (
          <CustomProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>
      <Link href={'/projects'}>
        <motion.h2
          variants={fadeIn('right', 'spring', 3 * 0.5, 0.75)}
          className='text-lg lg:text-xl text-gray-500 font-bold my-2 flex justify-center items-center'
        >
          <span>View All Projects</span>{' '}
          <AiOutlineArrowRight className='text-xl ml-1' />
        </motion.h2>
      </Link>
    </motion.div>
  );
};

export default RecentProjects;
