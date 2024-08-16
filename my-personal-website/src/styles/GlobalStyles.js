import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    padding-top: 18px; /* Adjust based on your header height */
    transition: all 0.4s linear;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  header {
    background-color: ${({ theme }) => theme.headerBg};
    color: ${({ theme }) => theme.headerText};
  }
`;

export default GlobalStyles;
