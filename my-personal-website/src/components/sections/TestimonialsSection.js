// src/components/sections/TestimonialsSection.js

import React from 'react';
import styled from 'styled-components';
import Carousel from '../common/Carousel'; // Reusable Carousel component

const TestimonialsSectionContainer = styled.section`
  padding: 4rem 2rem;
`;

const TestimonialsTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const testimonials = [
  { text: 'Great work! Highly recommend.', author: 'Client A' },
  { text: 'Professional and dedicated.', author: 'Client B' }
];

const TestimonialsSection = () => {
  return (
    <TestimonialsSectionContainer>
      <TestimonialsTitle>Testimonials</TestimonialsTitle>
      <Carousel items={testimonials} />
    </TestimonialsSectionContainer>
  );
};

export default TestimonialsSection;
