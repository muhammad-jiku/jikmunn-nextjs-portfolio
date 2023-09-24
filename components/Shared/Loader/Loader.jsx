'use client';

import React from 'react';
// internal import
import loadingImg from '../../../assets/gifs/loading.gif';

const Loader = () => {
  return (
    <div className='hero min-h-full'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <img src={loadingImg.src} alt='loading' />
        </div>
      </div>
    </div>
  );
};

export default Loader;
