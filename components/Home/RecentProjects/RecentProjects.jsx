'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';
import TypingText from '@/components/Shared/CustomTexts/CustomTexts';

const RecentProjects = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container mx-auto p-3 my-6"
    >
      <TypingText title="Recent Projects" />
      <h1>Projects</h1>
    </motion.div>
  );
};

export default RecentProjects;
