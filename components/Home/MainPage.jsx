'use client';

import React, { useEffect } from 'react';
// internal imports
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import RecentProjects from './RecentProjects/RecentProjects';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import { handleDisableRightClick } from '@/utils/handleRightClick';

const MainPage = () => {
  useEffect(() => {
    // disable right click
    document.addEventListener('contextmenu', handleDisableRightClick);

    // enable right click
    // document.removeEventListener('contextmenu', handleDisableRightClick);
  }, []);

  return (
    <>
      <section className='snap-start'>
        <Banner />
      </section>
      <section className='snap-center'>
        <Services />
      </section>
      <section className='snap-center'>
        <Skills />
      </section>
      <section className='snap-center'>
        <RecentProjects />
      </section>
      <section className='snap-center'>
        <Contact />
      </section>
    </>
  );
};

export default MainPage;
