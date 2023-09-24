'use client';

import React from 'react';
// external imports
import { motion } from 'framer-motion';
import { FiChevronsRight } from 'react-icons/fi';
// internal import
import { fadeIn } from '@/utils/motion';

const ServicesCard = ({ service }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 3 * 0.5, 0.75)}
      className='m-1 px-16 py-4 box-border w-full shadow-xl flex flex-col justify-start items-start glass rounded cursor-pointer'
    >
      <div className='p-2'>
        <h2 className='text-primary text-xl md:text-2xl mb-2'>
          {service?.title}
        </h2>
        {service?.desc?.split('.')?.map((s, i) => (
          <p
            key={i}
            className='text-gray-400 text-sm lg:text-md flex items-center'
          >
            {' '}
            <FiChevronsRight className='mr-1 text-xl font-extrabold' />{' '}
            <span> {s}</span>{' '}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesCard;
