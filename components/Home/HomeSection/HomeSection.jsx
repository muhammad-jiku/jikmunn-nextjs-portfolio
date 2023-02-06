import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import RecentProjects from '../RecentProjects/RecentProjects';
import Services from '../Services/Services';
import Skillls from '../Skillls/Skillls';

const HomeSection = () => {
  return (
    <>
      <Banner />
      <Services />
      <Skillls />
      <RecentProjects />
      <Contact />
    </>
  );
};

export default HomeSection;
