'use client';

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTop = () => {
  // const [visible, setVisible] = useState(false);
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 300) {
  //     setVisible(true);
  //   } else if (scrolled <= 300) {
  //     setVisible(false);
  //   }
  // };

  const toTheTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  // window.addEventListener('scroll', toggleVisible);

  return (
    <>
      {backToTopButton && (
        <button className="btn btn-circle bg-primary btn-md fixed bottom-36 right-4 text-white hover:bg-neutral">
          <FaArrowUp
            onClick={toTheTop}
            //   style={{ display: visible ? 'inline' : 'none' }}
            className="text-xl"
          />
        </button>
      )}
    </>
  );
};

export default GoToTop;
