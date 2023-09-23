'use client';

import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { sendContactForm } from '@/lib/helper';

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const form = useRef();

  const onSubmit = async (data) => { 
    try {
      await sendContactForm(data);
      toast.success('Thank You so much for your valuable words! 😊');
    } catch (error) {
      // console.log(error);
      toast.error('Unfortunately! your message failed to send! 😔');
    }
    reset();
  };
  return (
    <div className="my-4">
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control flex flex-col mb-4">
          <div className="mr-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 text-gray-400 bg-transparent border-b-2 border-primary w-full mb-4 focus:outline-0"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Please write down your name',
                },
              })}
            />
            <p className="text-red-500 font-semibold">
              {errors?.name?.type === 'required' && (
                <span>{errors?.name?.message}</span>
              )}
            </p>
          </div>
          <div className="mr-2">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-2 text-gray-400 bg-transparent border-b-2 border-primary w-full mb-4 focus:outline-0"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Please write down your email',
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Invalid Email',
                },
              })}
            />
            <p className="text-red-500 font-semibold">
              {errors?.email?.type === 'required' && (
                <span>{errors?.email?.message}</span>
              )}
              {errors?.email?.type === 'pattern' && (
                <span>{errors?.email?.message}</span>
              )}
            </p>
          </div>
          <div className="mr-2">
            <input
              type="text"
              name="topic"
              placeholder="Your Topic"
              className="p-2 text-gray-400 bg-transparent border-b-2 border-primary w-full mb-4 focus:outline-0"
              {...register('topic', {
                required: {
                  value: true,
                  message: 'Please write down your topic',
                },
              })}
            />
            <p className="text-red-500 font-semibold">
              {errors?.topic?.type === 'required' && (
                <span>{errors?.topic?.message}</span>
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
            className="p-2 text-gray-400 bg-transparent border-b-2 border-primary focus:outline-0"
            {...register('message', {
              required: {
                value: true,
                message: 'Please write down your message',
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
            className="btn bg-primary font-bold cursor-pointer hover:bg-neutral text-white uppercase"
            value="Send Message"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
