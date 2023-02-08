'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
// import me from '../../../assets/images/me.jpg';
import bgImg from '../../../assets/images/devV2.png';
import { fromTopVariants } from '@/utils/motion';
import styles from '@/styles';
import BannerText from './BannerText';
import '../../../styles/Banner.css';

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
      className={`${styles.xPaddings} hero min-h-[600px] lg:min-h-screen bg-cover bg-no-repeat bg-opacity-80 w-full flex flex-col relative snap-center`}
      // className="hero min-h-screen bg-cover bg-no-repeat w-full flex flex-col"
      style={{ backgroundImage: `url(${bgImg?.src})` }}
    >
      {/* navbar */}
      <div className="navbar bg-opacity-10 py-6 my-0">
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
              className="menu menu-compact dropdown-content mt-2 px-2 py-1 shadow rounded-box w-52 glass z-10"
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>

      {/* hero banner*/}
      <div className="hero-overlay"></div>
      {/* <div className="hero-content text-center mt-48 lg:mt-24"> */}
      <div className="hero-content text-center mt-40 md:mt-44">
        <div className="max-w-md">
          <div className="my-0">
            <BannerText />
          </div>
        </div>
      </div>
      {/* go to down arrow*/}
      <div>
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
    </motion.div>
  );
};

export default Banner;
