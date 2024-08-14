// src/components/sections/SkillsSection.js

import React from 'react';
import styled from 'styled-components';

const SkillsSectionContainer = styled.section`
  padding: 4rem 2rem;
`;

const SkillsTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillName = styled.h3`
  font-size: 1.5rem;
`;

const SkillProgress = styled.div`
  background: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  height: 20px;
  width: 100%;
`;

const SkillFill = styled.div`
  background: ${(props) => props.theme.primaryColor};
  height: 100%;
  width: ${(props) => props.width}%;
  transition: width 0.3s ease;
`;

export const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'CSS', level: 80 }
  ];

  return (
    <SkillsSectionContainer>
      <SkillsTitle>Skills</SkillsTitle>
      {skills.map((skill) => (
        <SkillItem key={skill.name}>
          <SkillName>{skill.name}</SkillName>
          <SkillProgress>
            <SkillFill width={skill.level} />
          </SkillProgress>
        </SkillItem>
      ))}
    </SkillsSectionContainer>
  );
};

export default SkillsSection;
