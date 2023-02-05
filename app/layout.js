import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import { Suspense } from 'react';
import '../styles/globals.css';
import Loading from './loading';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen overflow-x-hidden bg-black text-white">
        <Navbar />
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
