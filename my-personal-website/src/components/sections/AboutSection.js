// src/components/sections/AboutSection.js

import React from 'react';
import styled from 'styled-components';
import profilePhoto from '../../assets/image/profile-photo.png'; // Ensure this path is correct

const AboutSectionContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const AboutPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
`;

export const  AboutSection = () => {
  return (
    <AboutSectionContainer>
      <img src={profilePhoto} alt="Profile" />
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        Hi, I'm [Your Name]. I'm a [Your Profession] with experience in [Your Skills/Field]. I enjoy [Your Interests/Hobbies].
      </AboutText>
    </AboutSectionContainer>
  );
};

export default AboutSection;
