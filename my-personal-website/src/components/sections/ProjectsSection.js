// src/components/sections/ProjectsSection.js

import React from 'react';
import styled from 'styled-components';
import Card from '../common/Card'; // Reusable Card component

const ProjectsSectionContainer = styled.section`
  padding: 4rem 2rem;
`;

const ProjectsTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const projects = [
  { title: 'Project One', description: 'Description of project one.', image: 'path/to/image1.jpg' },
  { title: 'Project Two', description: 'Description of project two.', image: 'path/to/image2.jpg' }
];

export const ProjectsSection = () => {
  return (
    <ProjectsSectionContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <Card key={project.title} title={project.title} description={project.description} image={project.image} />
        ))}
      </ProjectsGrid>
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection; // Ensure default export

