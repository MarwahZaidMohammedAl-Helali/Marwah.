import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>About Me</h1>
      <p>Information about your background, skills, and experience.</p>
    </AboutContainer>
  );
};

export default About;
