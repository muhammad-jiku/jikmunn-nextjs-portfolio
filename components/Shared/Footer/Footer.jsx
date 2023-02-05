'use client';

import React from 'react';

const Footer = () => {
  const year = new Date()?.getFullYear();
  return (
    <div className="mt-auto pt-6">
      {/* <BackToTop /> */}
      <div className="footer footer-center p-4 glass">
        <div>
          {/* <div>
             <a
               href="https://www.facebook.com/azizul.azizulhoquejiku/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white">
                 <FaFacebookF className="text-lg md:text-2xl" />
               </button>
             </a>
             <a
               href="https://www.instagram.com/muhammadazizuljiku/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:text-white">
                 <FaInstagram className="text-lg md:text-2xl" />
               </button>
             </a>
             <a
               href="https://twitter.com/muhammadjiku364"
               target="_blank"
               rel="noopener noreferrer"
             >
               {' '}
               <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white">
                 <FaTwitter className="text-lg md:text-2xl" />
               </button>
             </a>
             <a
               href="https://www.linkedin.com/in/muhammad-azizul-hoque-jiku-775057211/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-info hover:text-white">
                 <FaLinkedinIn className="text-lg md:text-2xl" />
               </button>
             </a>
             <a
               href="https://github.com/muhammad-jiku"
               target="_blank"
               rel="noopener noreferrer"
             >
               <button className="btn btn-circle btn-sm md:btn-md mr-2 hover:bg-white hover:text-black">
                 <FaGithub className="text-lg md:text-2xl" />
               </button>
             </a>
           </div> */}
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
    </div>
  );
};

export default Footer;
