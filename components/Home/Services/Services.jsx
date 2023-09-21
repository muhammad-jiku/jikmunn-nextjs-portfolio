'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ServicesCard from './ServicesCard';
import { staggerContainer } from '@/utils/motion';
import { CustomTexts } from '@/components';
import { servicesData } from '@/db';

const Services = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='container mx-auto p-3 my-4'
    >
      <CustomTexts title='Services' />
      {/* services cards */}
      <div className='container mx-auto my-10 p-2 grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {servicesData.map((service, idx) => (
          <ServicesCard key={idx} service={service} idx={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
