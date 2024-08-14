import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to My Personal Website</h1>
      <p>I'm a software engineer with a passion for coding and technology.</p>
    </HomeContainer>
  );
};

export default Home;
