import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #282c34;
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} My Personal Website
    </FooterContainer>
  );
};

export default Footer;
