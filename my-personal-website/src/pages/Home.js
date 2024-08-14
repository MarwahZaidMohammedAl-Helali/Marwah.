import React from 'react';
import HeroSection from '../components/sections/HeroSection'; // Ensure path and export match
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <section className="section-container">
        <AboutSection />
        <SkillsSection />
      </section>
      <section className="section-container">
        <ProjectsSection />
      </section>
      <section className="section-container">
        <TestimonialsSection />
        <BlogSection />
      </section>
      <section className="section-container">
        <ContactSection />
      </section>
      <div className="placeholder-message">
        <p>Content coming soon!</p>
      </div>
    </div>
  );
};

export default Home;
