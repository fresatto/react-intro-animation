import React from 'react';

import { Container, Header, BigText } from './styles';

const Home: React.FC = () => {
  return (
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
  );
};

export default Home;
