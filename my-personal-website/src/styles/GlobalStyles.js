// src/styles/GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

// Create a global style component using styled-components
const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px; /* Base font size for accessibility */
  }

  body {
    font-family: 'Open Sans', sans-serif; /* Default font */
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme.textColor}; /* Text color from theme */
    background-color: ${(props) => props.theme.backgroundColor}; /* Background color from theme */
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primaryColor}; /* Link color from theme */
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

export default GlobalStyles;
