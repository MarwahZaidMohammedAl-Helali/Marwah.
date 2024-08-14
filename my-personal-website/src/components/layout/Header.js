// src/components/layout/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for the header
const HeaderContainer = styled.header`
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
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
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

const Header = () => {
  // Functionality for toggling the mobile menu can be added here

  return (
    <HeaderContainer>
      <Logo>
        MyLogo
      </Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
      <BurgerMenu>
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenu>
    </HeaderContainer>
  );
};

export default Header;
