import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import RecentProjects from '../RecentProjects/RecentProjects';
import Services from '../Services/Services';
import Skillls from '../Skillls/Skillls';

const HomeSection = () => {
  return (
    <>
      <section className="snap-start">
        <Banner />
      </section>
      <section className="snap-center">
        <Services />
      </section>
      <Skillls />
      <RecentProjects />
      <Contact />
    </>
  );
};

export default HomeSection;
