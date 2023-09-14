'use client';

import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import '../styles/globals.css';
import Loading from './loading';
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
      <body className='flex flex-col min-h-screen overflow-x-hidden bg-black text-white snap-y snap-mandatory'>
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
