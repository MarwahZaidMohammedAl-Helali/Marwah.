// src/pages/Home.js

import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import BlogSection from '../components/sections/BlogSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
};

export default Home;
