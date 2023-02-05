import NotFound from '@/components/Shared/NotFound/NotFound';
import Head from 'next/head';
import React from 'react';

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Something went wrong!</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotFound />
    </>
  );
};

export default ErrorPage;
