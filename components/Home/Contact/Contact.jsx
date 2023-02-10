'use client';

import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
// import emailjs from '@emailjs/browser';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import TypingText from '@/components/Shared/CustomTexts/CustomTexts';
import { staggerContainer } from '@/utils/motion';
import ContactIcons from './ContactIcons';

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const form = useRef();

  const onSubmit = () => {
    // emailjs
    //   .sendForm(
    //     'service_h3mf1um', //'YOUR_SERVICE_ID',
    //     'template_nme8c7n', //'YOUR_TEMPLATE_ID',
    //     form.current, //data,
    //     'CX9sx6H64TnqcK7PG' // 'YOUR_PUBLIC_KEY'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       // toast.success('Your message sent successfully!');
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       // toast.error('Unfortunately! your message failed to send!!');
    //     }
    //   );
    reset();
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container mx-auto p-6 my-6"
    >
      {/* <ToastContainer /> */}
      <TypingText title="Get in touch" />
      <div className="flex flex-col items-center justify-center md:justify-around lg:flex-row">
        <div className="w-full lg:w-1/2">
          <p className="py-6 text-xl text-justify text-gray-400">
            <span className="text-teal-400">Hello there!</span> Thank You for
            looking around my portfolio. If you have any suggestions, or want to
            contact me, or even want to say “hello”. Please fill out the form
            below and I will reply you shortly. I&apos;ve also placed all my
            social account links, mail, contact no, LinkedIn, and GitHub links,
            feel free to connect with me.{' '}
            <span className="text-teal-400">Thank You!</span> 😊
          </p>
          <ContactIcons />
        </div>
        <div className="w-full max-w-sm lg:w-1/2 shadow-2xl">
          <div className="my-4">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control flex flex-col md:flex-row mb-4">
                <div className="mr-2">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="p-2 text-gray-400 bg-transparent border-b-2 border-teal-500 w-full mb-4 focus:outline-0"
                    {...register('user_name', {
                      required: {
                        value: true,
                        message: 'Please insert your name',
                      },
                    })}
                  />
                  <p className="text-red-500 font-semibold">
                    {errors?.user_name?.type === 'required' && (
                      <span>{errors?.user_name?.message}</span>
                    )}
                  </p>
                </div>
                <div className="mr-2">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="p-2 text-gray-400 bg-transparent border-b-2 border-teal-500 w-full mb-4 focus:outline-0"
                    {...register('user_email', {
                      required: {
                        value: true,
                        message: 'Please insert your email',
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Invalid Email',
                      },
                    })}
                  />
                  <p className="text-red-500 font-semibold">
                    {errors?.user_email?.type === 'required' && (
                      <span>{errors?.user_email?.message}</span>
                    )}
                    {errors?.user_email?.type === 'pattern' && (
                      <span>{errors?.user_email?.message}</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="form-control mb-4">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                  className="p-2 text-gray-400 bg-transparent border-b-2 border-teal-500 focus:outline-0"
                  {...register('message', {
                    required: {
                      value: true,
                      message: 'Please write your message',
                    },
                  })}
                ></textarea>
                <p className="text-red-500 font-semibold">
                  {errors?.message?.type === 'required' && (
                    <span>{errors?.message?.message}</span>
                  )}
                </p>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-teal-500 font-bold cursor-pointer hover:bg-teal-800 text-white uppercase"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
