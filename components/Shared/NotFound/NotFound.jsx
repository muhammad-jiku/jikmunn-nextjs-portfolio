'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NotFoundImg from '../../../assets/gifs/notfound1.gif';
import { fromTopVariants } from '@/utils/motion';
import { handleDisableRightClick } from '@/utils/handleRightClick';

const NotFound = () => {
  useEffect(() => {
    // disable right click
    document.addEventListener('contextmenu', handleDisableRightClick);

    // enable right click
    // document.removeEventListener('contextmenu', handleDisableRightClick);
  }, []);

  return (
    <motion.div
      variants={fromTopVariants}
      initial='hidden'
      whileInView='show'
      className='hero min-h-full'
    >
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <img src={NotFoundImg.src} alt='not found' />
          <h1 className='text-3xl font-bold py-4'>Page is not found!</h1>
          <button className='btn bg-primary font-bold cursor-pointer hover:bg-neutral'>
            <Link href={`/`} className=''>
              Go to Home
            </Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
