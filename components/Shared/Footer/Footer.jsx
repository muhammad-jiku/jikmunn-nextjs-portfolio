'use client';

import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import styles from '@/styles';
import { fromBottomVariants } from '@/utils/motion';
import GoToTop from '@/components/Shared/ToTheTop/GoToTop';
import SocialIcons from '../SocialIcons/SocialIcons';

const Footer = () => {
  const year = new Date()?.getFullYear();
  return (
    <motion.div
      variants={fromBottomVariants}
      initial="hidden"
      whileInView="show"
      className={`pt-6 mt-auto relative`}
    >
      <GoToTop />
      <div className="footer footer-center p-4 glass">
        <div>
          <div>
            <SocialIcons />
            {/* <a
              href="https://www.facebook.com/azizul.azizulhoquejiku/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white glass">
                <FaFacebookF className="text-lg md:text-2xl" />
              </button>
            </a>
            <a
              href="https://www.instagram.com/muhammadazizuljiku/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:text-white glass">
                <FaInstagram className="text-lg md:text-2xl" />
              </button>
            </a>
            <a
              href="https://twitter.com/muhammadjiku364/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white glass">
                <FaTwitter className="text-lg md:text-2xl" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-azizul-hoque-jiku-775057211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white glass">
                <FaLinkedinIn className="text-lg md:text-2xl" />
              </button>
            </a>
            <a
              href="https://github.com/muhammad-jiku/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-white hover:text-black glass">
                <FaGithub className="text-lg md:text-2xl" />
              </button>
            </a> */}
          </div>
          <p>
            Copyright &copy; {year} - All right reserved by{' '}
            <span
              className="text-xs text-teal-500 font-extrabold sm:text-sm md:text-xl"
              // style={{ fontFamily: 'Comfortaa' }}
            >
              {' '}
              Muhammad Azizul Hoque Jiku{' '}
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
