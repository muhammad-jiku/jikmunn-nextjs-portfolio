'use client';

import BackgroundCircle from '@/components/Shared/BackgroundCircle/BackgroundCircle';
import SocialIcons from '@/components/Shared/SocialIcons/SocialIcons';
import Link from 'next/link';
import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';

const BannerText = () => {
  const [text, count] = useTypewriter({
    words: [
      'Hello there! 👋',
      'Peace be upon you 🌻',
      'This is Muhammad Azizul Hoque Jiku 😊',
      '<guyWhoLovesToCodeEveryday />',
      '<alsoLovesToExploreNewThings />',
      //   'Welcome here 🎉',
      'Welcome here 🙌',
    ],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div className="py-4 my-0">
      {/* <BackgroundCircle /> */}
      <p className="text-md uppercase font-bold text-gray-400 pb-2 tracking-[10px] md:tracking-[8px]">
        MERN Stack Web Developer
      </p>
      <p className="font-bold text-md md:text-xl text-primary">
        {/* <p className="font-bold text-lg md:text-2xl text-white"> */}
        {text}
        {/* <Cursor cursorColor="#fff" /> */}
        <Cursor cursorColor="#11998D" />
      </p>
      <SocialIcons />
      {/* <p className="text-justify">
        <span className="text-2xl">W</span>elcome to my portfolio that I&apos;ve
        designed to showcase the skills and expertise that I&apos;ve accumulated
        over the year. I&apos;ve also placed all my social links, feel free to
        connect with me.
      </p>
      <button className="btn glass btn-xs sm:btn-sm md:btn-md my-2">
        <a
          href={
            'https://drive.google.com/file/d/11G5T7o0L3YRpC5ONa7q5u0LEgdfXlL_1/view?usp=share_link'
          }
          target="_blank"
          rel="noreferrer"
        >
          Download Resume{' '}
        //   <FontAwesomeIcon icon={faDownload} className="ml-2" size="lg" /> 
        </a>
      </button>
      <button className="btn active btn-xs sm:btn-sm md:btn-md ml-2">
        <Link href={'/about'}>About Me</Link>
      </button> */}
    </div>
  );
};

export default BannerText;
