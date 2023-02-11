'use client';

import React from 'react';
import me from '../../assets/images/person/me.jpg';

const About = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="hero">
        <div className="hero-content flex-col">
          <img
            className="mask mask-circle shadow-2xl first-line:h-64 md:h-72"
            src={me.src}
            alt="Muhammad Azizul Hoque Jiku"
          />

          <div
          // style={{ fontFamily: 'Headland One' }}
          >
            <h1
              className="text-4xl md:text-5xl font-bold capitalize text-teal-500"
              // style={{ fontFamily: 'Headland One' }}
            >
              Hello there!
            </h1>
            <p className="py-6 text-justify">
              I am{' '}
              <span className="text-teal-500">Muhammad Azizul Hoque Jiku</span>.
              Welcome to my portfolio. I&apos;ve designed and developed web
              applications with HTML5, CSS3, JavaScript, Bootstrap, Tailwind
              CSS, ReactJS, NodeJS, ExpressJS, MongoDB for 3+ years. I am also
              accomplished in tools like Netlify, Heroku, Firebase, Git, Github,
              Figma, Canvas, and Chrome Dev Tools.
            </p>

            <p className="py-6 text-justify">
              I&apos;ve also built web applications with StripeJS, React Stripe,
              React-firebase-hooks, React-router, React-bootstrap, and DaisyUI.
              I love to work with MERN Stack. I like to call myself “a
              passionate MERN Stack Web Developer”. In my spare time, I watch
              Football, Movies.
            </p>
            <a
              href={
                'https://drive.google.com/file/d/11G5T7o0L3YRpC5ONa7q5u0LEgdfXlL_1/view?usp=share_link'
              }
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn glass btn-xs sm:btn-sm md:btn-md">
                {' '}
                Download Resume{' '}
                {/* <FontAwesomeIcon icon={faDownload} className="ml-2" size="lg" /> */}
              </button>{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
