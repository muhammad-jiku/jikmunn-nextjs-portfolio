'use client';

import { usePathname } from 'next/navigation';
import React, { Suspense } from 'react';
import Footer from '../Shared/Footer/Footer';
import LoadingSpinner from '../Shared/Loading/Loading';
import Navbar from '../Shared/Navbar/Navbar';
import Particle from '../Shared/Particles/Particles';
import ScrollToTop from '../Shared/ToTheTop/ScrollToTop';

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-black text-white snap-y snap-mandatory">
      <ScrollToTop pathname={pathname} />
      {pathname !== '/' ? (
        <>
          {' '}
          <Navbar />
          <Particle />
        </>
      ) : null}
      <Suspense
        fallback={
          <>
            <LoadingSpinner />
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
