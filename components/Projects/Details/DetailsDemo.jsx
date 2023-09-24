'use client';

import React from 'react';
// external imports
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
// internal imports
import { fadeIn } from '@/utils/motion';
import { CustomSubTexts } from '../..';

const DetailsDemo = ({ projectInfo }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className='p-2 lg:p-6 flex flex-col justify-center items-center'
    >
      <ReactPlayer
        url={`${projectInfo?.video}`}
        light={
          <img
            loading='lazy'
            src={`${projectInfo?.photo}`}
            alt={`Thumbnail of ${projectInfo?.projectTitle}`}
          />
        }
        width='100%'
        height='100%'
        controls={true}
        playing={true}
        loop={true}
        volume={1}
        muted={true}
        previewTabIndex={1}
        playbackRate={1.0}
      />
      <div className='my-6'>
        <CustomSubTexts title={`${projectInfo?.projectTitle}'s project demo`} />
      </div>
      <hr className='w-1/3 lg:w-1/4 my-2 border-[1px] border-emerald-200' />
    </motion.div>
  );
};

export default DetailsDemo;
