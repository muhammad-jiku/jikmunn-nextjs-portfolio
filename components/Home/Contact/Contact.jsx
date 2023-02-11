'use client';

import React from 'react';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import TypingText from '@/components/Shared/CustomTexts/CustomTexts';
import { fadeIn, fromSideVariants, staggerContainer } from '@/utils/motion';
import ContactIcons from './ContactIcons';
import ContactText from './ContactText';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container mx-auto p-3 my-6"
    >
      <ToastContainer />
      <TypingText title="Get in touch" />
      <div className="flex flex-col items-center justify-center md:justify-around lg:flex-row">
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="w-full lg:w-1/2"
        >
          <ContactText />
          <ContactIcons />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="w-full max-w-sm lg:w-1/2 shadow-2xl my-4"
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
