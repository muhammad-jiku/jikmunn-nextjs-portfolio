'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

const ServicesCard = () => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 3.5 * 0.5, 0.75)}
      className="flex flex-col md:flex-row justify-center md:justify-evenly my-6"
    >
      <div className="shadow-xl flex flex-col justify-start items-start m-1 px-16 py-4 box-border glass rounded cursor-pointer">
        <div className="py-4">
          <h2 className="text-teal-500 text-lg md:text-2xl mb-2">Web Design</h2>
          <h3 className="text-gray-400 text-sm md:text-lg"> {'>>'} HTML/CSS</h3>
          <h3 className="text-gray-400 text-sm md:text-lg">
            {' '}
            {'>>'} Bootstrap
          </h3>
          <h3 className="text-gray-400 text-sm md:text-lg">
            {' '}
            {'>>'} Tailwind CSS
          </h3>
          <h3 className="text-gray-400 text-sm md:text-lg">
            {' '}
            {'>>'} Material UI
          </h3>{' '}
          <h3 className="text-gray-400 text-sm md:text-lg">
            {' '}
            {'>>'} SCSS/SASS{' '}
          </h3>
          <h3 className="text-gray-400 text-sm md:text-lg">
            {' '}
            {'>>'} Framer Motion
          </h3>
        </div>
      </div>
      <div className="shadow-xl flex flex-col justify-start items-start m-1 px-16 py-4 box-border glass rounded cursor-pointer">
        <div className="py-4">
          <h2 className="text-teal-500 text-lg md:text-2xl mb-2">
            Web Development
          </h2>
          <h3 className="text-gray-400 text-sm md:text-lg"> {'>>'} HTML/CSS</h3>
          <h3 className="text-gray-400 text-sm md:text-lg">
            {' '}
            {'>>'} Javascript
          </h3>
          <h3 className="text-gray-400 text-sm md:text-lg"> {'>>'} ReactJS</h3>
          <h3 className="text-gray-400 text-sm md:text-lg"> {'>>'} NodeJS</h3>
          <h3 className="text-gray-400 text-sm md:text-lg">
            {' '}
            {'>>'} ExpressJS
          </h3>
          <h3 className="text-gray-400 text-sm md:text-lg"> {'>>'} NoSQL</h3>
          <h3 className="text-gray-400 text-sm md:text-lg"> {'>>'} ejs</h3>
          <h3 className="text-gray-400 text-sm md:text-lg"> {'>>'} NextJS</h3>
        </div>
      </div>
      <div className="shadow-xl flex flex-col justify-start items-start  m-1 px-16 py-4 box-border glass rounded cursor-pointer">
        <div className="py-4">
          <h2 className="text-teal-500 text-lg md:text-2xl mb-2">SEO</h2>
          <h3 className="text-gray-400 text-sm md:text-lg">
            {' '}
            {'>>'} Site Audit
          </h3>
          <h3 className="text-gray-400 text-sm md:text-lg">
            {' '}
            {'>>'} Keyword Research
          </h3>
          <h3 className="text-gray-400 text-sm md:text-lg">
            {' '}
            {'>>'} Tracking Keywords
          </h3>
          <h3 className="text-gray-400 text-sm md:text-lg"> {'>>'} CMS</h3>
          <h3 className="text-gray-400 text-sm md:text-lg"> {'>>'} Sitemap</h3>
          <h3 className="text-gray-400 text-sm md:text-lg">
            {' '}
            {'>>'} Onpage SEO
          </h3>
          <h3 className="text-gray-400 text-sm md:text-lg">
            {' '}
            {'>>'} Offpage SEO
          </h3>
          <h3 className="text-gray-400 text-sm md:text-lg">
            {' '}
            {'>>'} Citation Building
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
