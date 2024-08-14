// src/components/layout/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for the sidebar
const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px; /* Adjust based on your design */
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  padding: 2rem;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const SidebarLogo = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SidebarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.secondaryColor};
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLogo>MyLogo</SidebarLogo>
      <SidebarNav>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/about">About</SidebarLink>
        <SidebarLink to="/projects">Projects</SidebarLink>
        <SidebarLink to="/contact">Contact</SidebarLink>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
