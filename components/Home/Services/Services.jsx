'use client';

import React from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
  return (
    <div className="container mx-auto p-6 my-16">
      {/*  <div className="container mx-auto py-6 my-16 flex relative flex-col md:flex-row max-w-full justify-evenly items-center"> */}
      <p className="text-lg md:text-2xl text-center md:text-left uppercase font-semibold text-gray-500 pb-2 tracking-[10px] md:tracking-[8px]">
        <span className="hidden md:inline">||</span>Services
      </p>
      {/* services cards */}
      <div>
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;
