import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';

function Home() {
  return (
    <div>
      <HeroSection />
      {      <AboutSection />
      }
    </div>
  );
}

export default Home;
