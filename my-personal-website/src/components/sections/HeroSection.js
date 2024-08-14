// src/components/sections/HeroSection.js

import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/image/hero-background.jpg'; // Example background image

const HeroSectionContainer = styled.section`
  position: relative;
  height: 100vh;
  background: url(${heroImage}) no-repeat center center/cover;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
`;

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroContent>
        <HeroTitle>Welcome to My Personal Website</HeroTitle>
        <HeroSubtitle>Explore my work, skills, and more</HeroSubtitle>
      </HeroContent>
    </HeroSectionContainer>
  );
};

export default HeroSection;
