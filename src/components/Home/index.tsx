import React, { useRef } from 'react';

import { Container, Header, BigText } from './styles';
import { useSpring } from 'react-spring';

import IntroAnimation from '../IntroAnimation';

const Home: React.FC = () => {
  const homeFadeInRef = useRef(null);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    ref: homeFadeInRef,
  });

  return (
    <>
      <Container>
        <Header style={{ ...fadeIn }}>
          <h1>Afloat</h1>

          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </Header>
        <BigText>Stay Afloat</BigText>
      </Container>
      <IntroAnimation animationsRefs={[homeFadeInRef]} />
    </>
  );
};

export default Home;
