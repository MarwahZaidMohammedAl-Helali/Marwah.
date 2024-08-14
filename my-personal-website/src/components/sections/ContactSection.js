// src/components/sections/ContactSection.js

import React from 'react';
import styled from 'styled-components';

const ContactSectionContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`;

const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactInfo>Email: example@example.com</ContactInfo>
      <ContactInfo>Phone: +1234567890</ContactInfo>
      <p>Feel free to reach out using the form below:</p>
    </ContactSectionContainer>
  );
};

export default ContactSection;
