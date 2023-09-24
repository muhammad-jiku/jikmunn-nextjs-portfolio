'use client';

import React, { Suspense } from 'react';
// external import
import { usePathname } from 'next/navigation';
// internal import
import {
  Navbar,
  Loader,
  Footer,
  ScrollToTop,
  // Particle,
} from '..';

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className='flex flex-col min-h-screen overflow-hidden bg-black text-white snap-y snap-mandatory'>
      <ScrollToTop pathname={pathname} />
      {pathname !== '/' ? (
        <>
          <Navbar />
          {/* <Particle /> */}
        </>
      ) : null}
      <Suspense
        fallback={
          <>
            <Loader />
          </>
        }
      >
        {children}
      </Suspense>
      <Footer />
    </div>
  );
};

export default MainLayout;
