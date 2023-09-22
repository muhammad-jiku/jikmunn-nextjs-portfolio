'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { staggerContainer } from '@/utils/motion';
import { CustomTexts } from '..';

const ProjectDetails = ({ projectInfo }) => {
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
            <CustomTexts
              title={`${projectInfo?.projectTitle}'s project demo`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
