'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { staggerContainer } from '@/utils/motion';
import TypingText from '@/components/Shared/CustomTexts/CustomTexts';

const Skillls = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container mx-auto p-6 my-4"
    >
      <TypingText title="Skills" />
      <div className="flex flex-col items-center my-4">
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skillls;
