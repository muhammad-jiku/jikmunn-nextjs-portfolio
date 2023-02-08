'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { circleVariants } from '@/utils/motion';

const BackgroundCircle = () => {
  return (
    <motion.div
      variants={circleVariants}
      initial="hidden"
      animate="show"
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-teal-500 rounded-full opacity-10 h-[200px] w-[200px] mt-52" />
      <div className="absolute border border-teal-500 rounded-full opacity-20  h-[350px] w-[350px] mt-52" />
      <div className="absolute border border-teal-500 rounded-full opacity-20  h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="absolute border border-teal-700 rounded-full opacity-20 h-[650px] w-[650px] mt-52 animate-pulse" />{' '}
      <div className="absolute border border-teal-500 rounded-full opacity-20 h-[800px] w-[800px] mt-52 animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircle;
