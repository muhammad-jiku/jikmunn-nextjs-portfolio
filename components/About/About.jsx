'use client';

import React from 'react';
import me from '../../assets/images/person/me.jpg';
import AboutText from './AboutText';

const About = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col md:flex-row p-6">
          <img
            className="mask mask-diamond shadow-2xl h-64 md:h-72 lg:h-80"
            src={me.src}
            alt="Muhammad Azizul Hoque Jiku"
          />

          <div>
            {/* <p className="p-3 text-justify">
              Hi, I am{' '}
              <span className="text-teal-500">Muhammad Azizul Hoque Jiku</span>.
              Thanks for your valuable time to check out my portfolio. I am MERN
              Stack Web Developer and SEO enthusiast with in-depth experience. I
              build websites, design them, and also host them that help
              organizations address business challenges and meet their needs. I
              am currently studying Mechanical Engineering at the Shahjalal
              University of Science and Technology at Sylhet in Bangladesh.
            </p>

            <p className="p-3 text-justify">
              I manage everything from website navigation and layout to a
              company’s web hosting and security architecture. My expertise lies
              within front-end web apps, and the main languages in my tech stack
              are JavaScript, React, Redux, Next.js, Typescript, and of course
              HTML/CSS.
            </p>

            <p className="p-3 text-justify">
              Recently, I am working on writing blogs on the basics things to
              know about web development and other technical things. I’m a
              lifelong learner and love to explore new technology to learn, love
              to read and run.
            </p> */}
            <AboutText />
            <a
              href={
                'https://drive.google.com/file/d/11G5T7o0L3YRpC5ONa7q5u0LEgdfXlL_1/view?usp=share_link'
              }
              target="_blank"
              rel="noreferrer"
              className="ml-2"
            >
              <button className="btn glass btn-md p-2">
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
