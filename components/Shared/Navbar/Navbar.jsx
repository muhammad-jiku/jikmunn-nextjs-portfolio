'use client';

import Link from 'next/link';
import React from 'react';

import { motion } from 'framer-motion';
import { fromTopVariants } from '@/utils/motion';
import styles from '@/styles';

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link href={'/'} className="focus:bg-primary">
          Home
        </Link>
      </li>
      <li>
        <Link href={'/about'} className="focus:bg-primary">
          About
        </Link>
      </li>
      <li>
        <Link href={'/projects'} className="focus:bg-primary">
          Projects
        </Link>
      </li>
      <li>
        <Link href={'/blogs'} className="focus:bg-primary">
          Blogs
        </Link>
      </li>
      <li>
        <Link href={'/sign-in'} className="focus:bg-primary">
          Sign In
        </Link>
      </li>
      {/* <li>
        <Link href={'/blogs'} className="focus:bg-primary">Blogs</Link>
      </li> */}
    </>
  );
  return (
    <motion.div
      variants={fromTopVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-4 relative`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <button className="btn btn-ghost normal-case text-xs sm:text-sm md:text-xl">
            <Link href={'/'} className="">
              {/* <FontAwesomeIcon icon={faCode} className="mr-2" size="lg" />{' '} */}
              <span className="text-primary">Muhammad Azizul Hoque Jiku</span>
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
              className="menu menu-compact dropdown-content -mt-2 p-2 shadow rounded-box w-52 bg-primary"
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
