import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Container for the header
const HeaderContainer = styled.header`
  width: 100%;
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

// Logo styling
const Logo = styled(Link)`
  font-size: 1.8em;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: #f4a261;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

// Navigation styling for desktop
const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

const NavItem = styled.li`
  a {
    color: #333;
    text-decoration: none;
    font-size: 1em;
    transition: color 0.3s ease;

    &:hover {
      color: #f4a261;
    }
  }
`;

// Mobile menu icon styling
const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.8em;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Mobile menu styling
const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  right: 0;
  background-color: #fff;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-20px)'};
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: transform 0.3s ease, opacity 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNavItem = styled.div`
  a {
    color: #333;
    text-decoration: none;
    font-size: 1.2em;
    padding: 10px;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #f4a261;
      color: #fff;
    }
  }
`;

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderContainer>
      {/* Logo */}
      <Logo to="/">MySite</Logo>

      {/* Desktop Navigation */}
      <Nav>
        <NavList>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/about">About</Link></NavItem>
          <NavItem><Link to="/projects">Projects</Link></NavItem>
          <NavItem><Link to="/blog">Blog</Link></NavItem>
          <NavItem><Link to="/contact">Contact</Link></NavItem>
        </NavList>
      </Nav>

      {/* Mobile Menu Icon */}
      <MobileMenuIcon onClick={toggleMenu}>
        ☰
      </MobileMenuIcon>

      {/* Mobile Navigation Menu */}
      <MobileMenu isOpen={isMenuOpen}>
        <MobileNavItem><Link to="/" onClick={toggleMenu}>Home</Link></MobileNavItem>
        <MobileNavItem><Link to="/about" onClick={toggleMenu}>About</Link></MobileNavItem>
        <MobileNavItem><Link to="/projects" onClick={toggleMenu}>Projects</Link></MobileNavItem>
        <MobileNavItem><Link to="/blog" onClick={toggleMenu}>Blog</Link></MobileNavItem>
        <MobileNavItem><Link to="/contact" onClick={toggleMenu}>Contact</Link></MobileNavItem>
      </MobileMenu>
    </HeaderContainer>
  );
}

export default Header;

