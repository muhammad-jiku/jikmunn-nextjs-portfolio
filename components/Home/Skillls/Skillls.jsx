'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { staggerContainer } from '@/utils/motion';

const Skillls = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container mx-auto p-6 my-4"
    >
      <p className="text-lg md:text-2xl text-center md:text-left uppercase font-semibold text-gray-500 pb-2 tracking-[10px] md:tracking-[8px]">
        <span className="hidden md:inline">||</span>Skills
      </p>
      <div className="flex flex-col items-center my-4">
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skillls;
