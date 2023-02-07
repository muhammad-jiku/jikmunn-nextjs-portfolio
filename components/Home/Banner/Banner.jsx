'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
// import me from '../../../assets/images/me.jpg';
import bgImg from '../../../assets/images/dev.png';
import { fromTopVariants } from '@/utils/motion';
import styles from '@/styles';

const Banner = () => {
  const menuItems = (
    <>
      <li>
        <Link href={'/'} className="focus:bg-teal-500">
          Home
        </Link>
      </li>
      <li>
        <Link href={'/about'} className="focus:bg-teal-500">
          About
        </Link>
      </li>
      <li>
        <Link href={'/projects'} className="focus:bg-teal-500">
          Projects
        </Link>
      </li>
      <li>
        <Link href={'/blogs'} className="focus:bg-teal-500">
          Blogs
        </Link>
      </li>
      <li>
        <Link href={'/sign-in'} className="focus:bg-teal-500">
          Sign In
        </Link>
      </li>
      {/* <li>
        <Link href={'/blogs'} className="focus:bg-teal-500">Blogs</Link>
      </li> */}
    </>
  );

  return (
    <motion.div
      variants={fromTopVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} hero min-h-screen bg-cover bg-no-repeat bg-opacity-80 w-full flex flex-col relative`}
      // className="hero min-h-screen bg-cover bg-no-repeat w-full flex flex-col"
      style={{ backgroundImage: `url(${bgImg?.src})` }}
    >
      {/* navbar */}
      <div className="navbar bg-opacity-10 py-4 my-0 glass">
        <div className="navbar-start">
          <button className="btn btn-ghost normal-case text-xs sm:text-sm md:text-xl">
            <Link href={'/'} className="">
              {/* <FontAwesomeIcon icon={faCode} className="mr-2" size="lg" />{' '} */}
              <span className="text-teal-500">Muhammad Azizul Hoque Jiku</span>
            </Link>
          </button>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 glass z-10"
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>

      {/* hero */}
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content mt-48 lg:mt-24">
        <div className="max-w-md">
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
    </motion.div>
  );
};

export default Banner;
