'use client';

import React from 'react';
import ReactPlayer from 'react-player';
import { CustomSubTexts, CustomTexts } from '../..';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import { AiFillGithub } from 'react-icons/ai';
import { TbBrandGithub, TbWorld } from 'react-icons/tb';
import { TiTick } from 'react-icons/ti';

const DetailsText = ({ projectInfo }) => {
  return (
    <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className='p-2 lg:p-6 flex flex-col'
    >
      {/* description */}
      <div className='flex items-center justify-between p-2'>
        <CustomSubTexts title={`${projectInfo?.projectTitle}`} />
        <div className='flex ml-2'>
          <button className='ml-2 btn btn-circle bg-primary hover:bg-secondary border-[1px] border-primary hover:border-secondary'>
            <a
              href={`${projectInfo?.projectCodeLink}`}
              target='_blank'
              rel='noreferrer'
            >
              <TbBrandGithub className='text-xl' />
            </a>
          </button>{' '}
          <button className='ml-2 btn btn-circle bg-primary hover:bg-secondary border-[1px] border-primary hover:border-secondary'>
            <a
              href={`${projectInfo?.projectLink}`}
              target='_blank'
              rel='noreferrer'
            >
              <TbWorld className='text-xl' />
            </a>
          </button>
        </div>
      </div>
      <hr className='w-1/3 lg:w-1/4 mx-4 my-2 border-[1px] border-emerald-200' />
      <p className='text-sm sm:text-lg md:text-xl text-justify m-4'>
        {projectInfo?.desc}
      </p>
      <hr className='w-1/3 lg:w-1/4 mx-4 my-2 border-[1px] border-emerald-200' />
      {/* languages */}
      <div className='p-2 flex items-start'>
        <CustomSubTexts title={`Languages`} />
      </div>
      <div className='p-2 flex flex-wrap justify-evenly'>
        {projectInfo?.langs?.split('.')?.map((lang, idx) => (
          <p
            className='bg-neutral text-sm md:text-md p-2 rounded m-2'
            key={idx}
          >
            {lang}
          </p>
        ))}
      </div>{' '}
      <hr className='w-1/3 lg:w-1/4 mx-4 my-2 border-[1px] border-emerald-200' />
      {/* overview */}
      <div className='p-2 flex items-start'>
        <CustomSubTexts title={`Overview`} />
      </div>
      <div className='p-2'>
        {projectInfo?.details?.split('.')?.map((txt, idx) => (
          <div className='flex my-2 justify-start items-center' key={idx}>
            <TiTick className='text-xl' />{' '}
            <span className='ml-1 text-sm md:text-lg'>{txt}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DetailsText;
