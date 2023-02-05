'use client';

import React from 'react';
import Link from 'next/link';
import NotFoundImg from '../../../assets/gifs/notfound1.gif';

const NotFound = () => {
  return (
    <div className="hero min-h-full">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={NotFoundImg.src} alt="not found" />
          <h1 className="text-3xl font-bold py-4">Page is not found!</h1>
          <button className="btn btn-primary font-bold cursor-pointer">
            <Link href={`/`} className="bg-primary">
              Go to Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
