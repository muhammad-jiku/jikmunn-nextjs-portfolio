'use client';
import React, { Suspense } from 'react';
// internal imports
import Loading from './loading';
import '../styles/globals.css';
import { usePathname } from 'next/navigation';
import {
  Navbar,
  Footer,
  ScrollToTop,
  // Particle
} from '@/components';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang='en'>
      <head />
      <body className='flex flex-col min-h-screen overflow-hidden bg-black text-white snap-y snap-mandatory'>
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
              <Loading />
            </>
          }
        >
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
