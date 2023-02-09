'use client';

import React from 'react';
import { motion } from 'framer-motion';

import html from '../../../assets/images/skill_logos/htmll.png';
import css from '../../../assets/images/skill_logos/csss.png';
import bootstrap from '../../../assets/images/skill_logos/bootstrapp.png';
import tailwind from '../../../assets/images/skill_logos/tailwindd.png';
import sass from '../../../assets/images/skill_logos/sasss.png';
import mui from '../../../assets/images/skill_logos/muii.png';
import js from '../../../assets/images/skill_logos/JSS.png';
import react from '../../../assets/images/skill_logos/reactjss.png';
import node from '../../../assets/images/skill_logos/nodejss.png';
import ejs from '../../../assets/images/skill_logos/ejss.png';
import api from '../../../assets/images/skill_logos/api.png';
import json from '../../../assets/images/skill_logos/jsonn.png';
import express from '../../../assets/images/skill_logos/expressjss.png';
import mongo from '../../../assets/images/skill_logos/mongoo.png';
import typescript from '../../../assets/images/skill_logos/typescriptt.png';
import next from '../../../assets/images/skill_logos/nextjss.png';
import firebase from '../../../assets/images/skill_logos/firebasee.png';
import vercel from '../../../assets/images/skill_logos/vercell.png';
import git from '../../../assets/images/skill_logos/gitt.png';
import seo from '../../../assets/images/skill_logos/seoo.png';
import { fadeIn } from '@/utils/motion';

const Skill = () => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 3 * 0.5, 1)}
      className="grid grid-cols-4 md:grid-cols-5 gap-5 my-6"
    >
      {/* html */}
      <div className="group relative flex cursor-pointer">
        <img
          src={html.src}
          alt="html"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">90%</p>
          </div>
        </div>
      </div>
      {/* css */}
      <div className="group relative flex cursor-pointer">
        <img
          src={css.src}
          alt="css"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">93%</p>
          </div>
        </div>
      </div>
      {/* bootstrap */}
      <div className="group relative flex cursor-pointer">
        <img
          src={bootstrap.src}
          alt="bootstrap"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">91%</p>
          </div>
        </div>
      </div>
      {/* tailwind */}
      <div className="group relative flex cursor-pointer">
        <img
          src={tailwind.src}
          alt="tailwind"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">95%</p>
          </div>
        </div>
      </div>
      {/* sass */}
      <div className="group relative flex cursor-pointer">
        <img
          src={sass.src}
          alt="sass"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">82%</p>
          </div>
        </div>
      </div>
      {/* mui */}
      <div className="group relative flex cursor-pointer">
        <img
          src={mui.src}
          alt="material ui"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">80%</p>
          </div>
        </div>
      </div>
      {/* js */}
      <div className="group relative flex cursor-pointer">
        <img
          src={js.src}
          alt="javascript"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">87%</p>
          </div>
        </div>
      </div>
      {/* react */}
      <div className="group relative flex cursor-pointer">
        <img
          src={react.src}
          alt="react js"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">90%</p>
          </div>
        </div>
      </div>
      {/* node */}
      <div className="group relative flex cursor-pointer">
        <img
          src={node.src}
          alt="node js"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">83%</p>
          </div>
        </div>
      </div>
      {/* ejs */}
      <div className="group relative flex cursor-pointer">
        <img
          src={ejs.src}
          alt="embedded javascript"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">78%</p>
          </div>
        </div>
      </div>
      {/* api */}
      <div className="group relative flex cursor-pointer">
        <img
          src={api.src}
          alt="Application programming interface"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">92%</p>
          </div>
        </div>
      </div>
      {/* json */}
      <div className="group relative flex cursor-pointer">
        <img
          src={json.src}
          alt="JavaScript Object Notation"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">87%</p>
          </div>
        </div>
      </div>
      {/* express */}
      <div className="group relative flex cursor-pointer">
        <img
          src={express.src}
          alt="express js"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">93%</p>
          </div>
        </div>
      </div>
      {/* mongo */}
      <div className="group relative flex cursor-pointer">
        <img
          src={mongo.src}
          alt="mongo db"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">86%</p>
          </div>
        </div>
      </div>
      {/* typescript */}
      <div className="group relative flex cursor-pointer">
        <img
          src={typescript.src}
          alt="typescript"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">79%</p>
          </div>
        </div>
      </div>
      {/* next */}
      <div className="group relative flex cursor-pointer">
        <img
          src={next.src}
          alt="next js"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">88%</p>
          </div>
        </div>
      </div>
      {/* firebase */}
      <div className="group relative flex cursor-pointer">
        <img
          src={firebase.src}
          alt="firebase"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">83%</p>
          </div>
        </div>
      </div>
      {/* vercel */}
      <div className="group relative flex cursor-pointer">
        <img
          src={vercel.src}
          alt="vercel"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">92%</p>
          </div>
        </div>
      </div>
      {/* git */}
      <div className="group relative flex cursor-pointer">
        <img
          src={git.src}
          alt="git"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">81%</p>
          </div>
        </div>
      </div>
      {/* seo */}
      <div className="group relative flex cursor-pointer">
        <img
          src={seo.src}
          alt="search engine optimization"
          className="rounded-full border border-gray-400 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-teal-300 h-full w-full">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">77%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
