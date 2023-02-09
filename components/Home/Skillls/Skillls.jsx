'use client';

import React from 'react';
import Skill from './Skill';

const Skillls = () => {
  return (
    <div className="container mx-auto p-6 my-4">
      <p className="text-lg md:text-2xl text-center md:text-left uppercase font-semibold text-gray-500 pb-2 tracking-[10px] md:tracking-[8px]">
        <span className="hidden md:inline">||</span>Skills
      </p>
      <div className="flex flex-col items-center my-4">
        <Skill />
      </div>
    </div>
  );
};

export default Skillls;
