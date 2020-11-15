import React from 'react';

import { Container, Header, BigText } from './styles';

import IntroAnimation from '../IntroAnimation';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <h1>Afloat</h1>

          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </Header>
        <BigText>Stay Afloat</BigText>
      </Container>
      <IntroAnimation />
    </>
  );
};

export default Home;
