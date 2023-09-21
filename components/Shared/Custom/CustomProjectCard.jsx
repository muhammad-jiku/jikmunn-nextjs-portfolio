'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { fadeIn } from '@/utils/motion';
import Link from 'next/link';

const CustomProjectCard = ({ project, idx }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 3 * 0.5, 0.75)}
      className='card w-full shadow-xl image-full'
    >
      <figure>
        <img
          loading='lazy'
          src={`${project?.photo}`}
          alt={`${project?.projectTitle}`}
        />
      </figure>
      <div className='card-body'>
        <div className='flex justify-between'>
          <h2 className='card-title text-lg lg:text-2xl'>
            {project?.projectTitle}
          </h2>
          <button className='ml-1 btn btn-circle bg-primary hover:bg-secondary border-[1px] border-primary hover:border-secondary'>
            <Link href={`/projects/${project?.projectTitle}`}>
              <FiExternalLink className='text-xl' />
            </Link>
          </button>
        </div>
        <p className='my-10 text-justify text-sm lg:text-md text-emerald-200'>
          {project?.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default CustomProjectCard;
