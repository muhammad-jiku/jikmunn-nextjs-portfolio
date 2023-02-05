'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NotFoundImg from '../../../assets/gifs/notfound1.gif';
import { fromTopVariants } from '@/utils/motion';

const NotFound = () => {
  return (
    <motion.div
      variants={fromTopVariants}
      initial="hidden"
      whileInView="show"
      className="hero min-h-full"
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={NotFoundImg.src} alt="not found" />
          <h1 className="text-3xl font-bold py-4">Page is not found!</h1>
          <button className="btn bg-teal-500 font-bold cursor-pointer hover:bg-teal-800">
            <Link href={`/`} className="">
              Go to Home
            </Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
