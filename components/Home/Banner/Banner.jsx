'use client';

import Link from 'next/link';
import React from 'react';
import me from '../../../assets/images/me.jpg';

const Banner = () => {
  return (
    <div className="hero min-h-screen md:min-h-full lg:min-h-screen">
      <div className="hero-content flex-col items-center lg:flex-row-reverse">
        <img
          src={me.src}
          alt="Muhammad Azizul Hoque Jiku"
          className="mask mask-hexagon h-64 md:h-72"
        />
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            I&apos;m{' '}
            <span className="text-primary">Muhammad Azizul Hoque Jiku</span>
          </h1>
          <h1 className="text-xl md:text-3xl text-secondary">
            MERN Stack Web Developer
          </h1>
          <p className="py-4 text-justify">
            <span className="text-2xl">W</span>elcome to my portfolio that
            I&apos;ve designed to showcase the skills and expertise that
            I&apos;ve accumulated over the year. I&apos;ve also placed all my
            social links, feel free to connect with me.
          </p>
          <button className="btn glass btn-xs sm:btn-sm md:btn-md">
            <a
              href={
                'https://drive.google.com/file/d/11G5T7o0L3YRpC5ONa7q5u0LEgdfXlL_1/view?usp=share_link'
              }
              target="_blank"
              rel="noreferrer"
            >
              Download Resume{' '}
              {/* <FontAwesomeIcon icon={faDownload} className="ml-2" size="lg" /> */}
            </a>
          </button>
          <button className="btn active btn-xs sm:btn-sm md:btn-md ml-2">
            <Link href={'/about'}>About Me</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
