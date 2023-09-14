'use client';

import { usePathname } from 'next/navigation';
import React, { Suspense } from 'react';
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
    <div className='flex flex-col min-h-screen overflow-x-hidden bg-black text-white snap-y snap-mandatory'>
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
