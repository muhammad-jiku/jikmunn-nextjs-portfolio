'use client';

import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import Particle from '@/components/Shared/Particles/Particles';
import ScrollToTop from '@/components/Shared/ToTheTop/ScrollToTop';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import '../styles/globals.css';
import Loading from './loading';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen overflow-x-hidden bg-black text-white snap-y snap-mandatory">
        <ScrollToTop pathname={pathname} />
        {pathname !== '/' ? (
          <>
            {' '}
            <Navbar /> <Particle />
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
