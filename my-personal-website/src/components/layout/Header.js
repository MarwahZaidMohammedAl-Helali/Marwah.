import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiSun, HiMoon } from 'react-icons/hi';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ isScrolled }) => (isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent')};
  backdrop-filter: blur(10px);
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

const Logo = styled.div`
  font-size: 2.4rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, ${({ theme }) => theme.secondary}, ${({ theme }) => theme.primary});
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: right 0.3s ease;
    z-index: 999;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
  }
`;

const NavLink = styled.li`
  margin: 0 1.5rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }

  a {
    color: ${({ theme }) => theme.headerText};
    text-decoration: none;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    padding: 0.5rem 0;
    transition: color 0.3s ease, transform 0.3s ease;

    &.active {
      color: ${({ theme }) => theme.primary};
      &:after {
        width: 100%;
        background-color: ${({ theme }) => theme.primary};
      }
    }

    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: translateY(-3px);

      &:after {
        width: 100%;
        background-color: ${({ theme }) => theme.primary};
      }
    }

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      left: 0;
      bottom: 0;
      background-color: transparent;
      transition: width 0.3s ease;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    color: ${({ theme }) => theme.headerText};
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const ThemeToggle = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.headerText};
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: rotate(20deg);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
  }
`;

const Separator = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.primary};
  margin-top: 80px; // Ensure there's enough space for the fixed header
`;

function Header({ toggleTheme, isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderContainer isScrolled={isScrolled}>
        <Logo>
          <Link to="/">MyBrand</Link>
        </Logo>
        <MenuIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <NavMenu isOpen={isOpen}>
          <NavLinks>
            <NavLink>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</Link>
            </NavLink>
            <NavLink>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsOpen(false)}>About</Link>
            </NavLink>
            <NavLink>
              <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={() => setIsOpen(false)}>Projects</Link>
            </NavLink>
            <NavLink>
              <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={() => setIsOpen(false)}>Blog</Link>
            </NavLink>
            <NavLink>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsOpen(false)}>Contact</Link>
            </NavLink>
          </NavLinks>
        </NavMenu>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <HiSun /> : <HiMoon />}
        </ThemeToggle>
      </HeaderContainer>
      <Separator />
    </>
  );
}

export default Header;
