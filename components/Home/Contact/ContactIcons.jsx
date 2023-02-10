'use client';

import React from 'react';

import { BsTelephone } from 'react-icons/bs';
import { CiLocationOn, CiMail } from 'react-icons/ci';

const ContactIcons = () => {
  return (
    <div className="flex flex-col items-start my-3">
      <h1 className="flex justify-center items-center text-md md:text-lg">
        <BsTelephone /> <span className="ml-2">+8801855613783</span>
      </h1>
      <h1 className="flex justify-center items-center text-md md:text-lg">
        <CiLocationOn />{' '}
        <span className="ml-2">Feni-3900, Feni, Bangladesh.</span>
      </h1>
      <h1 className="flex justify-center items-center text-md md:text-lg">
        <CiMail /> <span className="ml-2">muhammadjiku364@gmail.com</span>
      </h1>
    </div>
  );
};

export default ContactIcons;
