'use client';

import React, { useEffect } from 'react';

const ScrollToTop = ({ pathname }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
