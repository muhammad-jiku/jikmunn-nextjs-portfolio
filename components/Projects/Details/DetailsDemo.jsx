'use client';

import React from 'react';
import ReactPlayer from 'react-player';
import { CustomTexts } from '../..';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

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
        <CustomTexts title={`${projectInfo?.projectTitle}'s project demo`} />
      </div>
    </motion.div>
  );
};

export default DetailsDemo;
