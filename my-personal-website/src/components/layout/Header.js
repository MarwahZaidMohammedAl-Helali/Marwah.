import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #282c34;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 24px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>My Personal Website</div>
      <Nav>
        <NavLink to="/"><FaHome /></NavLink>
        <NavLink to="/about"><FaUser /></NavLink>
        <NavLink to="/projects"><FaProjectDiagram /></NavLink>
        <NavLink to="/contact"><FaEnvelope /></NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
