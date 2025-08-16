import React from 'react';
import 
{ Header, Hero, Partners, 
  Services, CaseStudies, Process, 
  Team, Footer, ScrollToTopButton, ThemeToggle } 
from '../imports/components';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Services />
      <CaseStudies />
      <Process />
      <Team />
      <Footer />
      <ScrollToTopButton />
      <div className="theme-toggle-home">
        <ThemeToggle />
      </div>
    </>
  );
};

export default Home;