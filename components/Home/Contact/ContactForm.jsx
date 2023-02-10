'use client';

import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const form = useRef();

  const onSubmit = () => {
    emailjs
      .sendForm(
        `service_msnvuu9`, //'YOUR_SERVICE_ID',
        `template_nme8c7n`, //'YOUR_TEMPLATE_ID',
        form.current, //data,
        `uX7f-4W2zuG0j6Jyb` // 'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Thank You for your valuable words! 😊');
        },
        (error) => {
          console.log(error.text);
          toast.error('Unfortunately! your message failed to send! 😔');
        }
      );
    reset();
  };
  return (
    <div className="my-4">
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control flex flex-col mb-4">
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
  );
};

export default ContactForm;
