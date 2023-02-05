'use client';

import React, { Suspense } from 'react';
import Footer from '../Shared/Footer/Footer';
import LoadingSpinner from '../Shared/Loading/Loading';
import Navbar from '../Shared/Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />
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
