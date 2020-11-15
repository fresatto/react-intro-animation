import React from 'react';

import { MessageWrapper, Slider } from './styles';

const IntroAnimation: React.FC = () => {
  return (
    <>
      <MessageWrapper>
        <h2>
          <span>Creating inovation</span>
        </h2>
        <h2>
          <span>For everyday</span>
        </h2>
        <h2>
          <span>people.</span>
        </h2>
      </MessageWrapper>

      <Slider />
    </>
  );
};

export default IntroAnimation;
