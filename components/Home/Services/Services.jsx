'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ServicesCard from './ServicesCard';
import { staggerContainer } from '@/utils/motion';

const Services = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container mx-auto p-6 my-16"
    >
      {/*  <div className="container mx-auto py-6 my-16 flex relative flex-col md:flex-row max-w-full justify-evenly items-center"> */}
      <p className="text-lg md:text-2xl text-center md:text-left uppercase font-semibold text-gray-500 pb-2 tracking-[10px] md:tracking-[8px]">
        <span className="hidden md:inline">||</span>Services
      </p>
      {/* services cards */}
      <div className="snap-center">
        <ServicesCard />
      </div>
    </motion.div>
  );
};

export default Services;
