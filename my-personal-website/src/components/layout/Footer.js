// src/components/layout/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SocialMediaLinks = styled.div`
  margin: 1rem 0;
  
  a {
    color: #fff;
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;

const CopyrightText = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialMediaLinks>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </SocialMediaLinks>
        <CopyrightText>
          &copy; {new Date().getFullYear()} My Personal Website. All rights reserved.
        </CopyrightText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
