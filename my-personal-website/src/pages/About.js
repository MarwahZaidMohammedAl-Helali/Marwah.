// src/pages/About.js

import React from 'react';
import AboutSection from '../components/sections/AboutSection';

const About = () => {
  return (
    <div>
      <AboutSection />
      {/* Add additional details or sections about yourself */}
      <section>
        <h2>Additional Information</h2>
        <p>
          Here, you can add more detailed information about your background, experiences, and skills.
        </p>
      </section>
    </div>
  );
};

export default About;
