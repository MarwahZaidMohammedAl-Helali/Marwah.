// src/components/layout/Navigation.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

// Styled components for the navigation bar
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.secondaryColor};
  }
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  gap: 3px;

  span {
    background-color: #fff;
    height: 2px;
    width: 25px;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNav = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 60px; /* Adjust based on header height */
  right: 0;
  background-color: ${(props) => props.theme.primaryColor};
  width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  gap: 1rem;
  padding: 1rem;
  z-index: 1000;

  ${props => props.open ? `
    display: flex;
  ` : ''}
`;

const MobileNavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.secondaryColor};
  }
`;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavContainer>
      <Logo>MyLogo</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
      <BurgerMenu onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </BurgerMenu>
      <MobileNav open={isMenuOpen}>
        <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
        <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
        <MobileNavLink to="/projects" onClick={toggleMenu}>Projects</MobileNavLink>
        <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
      </MobileNav>
    </NavContainer>
  );
};

export default Navigation;
