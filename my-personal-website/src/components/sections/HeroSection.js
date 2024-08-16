import React from 'react';
import styled from 'styled-components';

const HeroSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`};
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 0px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SubHeading = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;

function HeroSection() {
  return (
    <HeroSectionContainer>
      <div>
        <Heading>Welcome to My Personal Website</Heading>
        <SubHeading>Explore my work, projects, and blog.</SubHeading>
      </div>
    </HeroSectionContainer>
  );
}

export default HeroSection;
