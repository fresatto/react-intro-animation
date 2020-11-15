import React from 'react';

import { MessageWrapper, Slider } from './styles';

interface IntroAnimationProps {
  animationsRefs?: React.MutableRefObject<any>[];
}

const msgs = ['Creating inovation', 'For Everyday', 'People'];

const IntroAnimation: React.FC<IntroAnimationProps> = ({ animationsRefs }) => {
  return (
    <>
      <MessageWrapper>
        {msgs.map((msg) => (
          <h2>
            <span>{msgs}</span>
          </h2>
        ))}
      </MessageWrapper>

      <Slider />
    </>
  );
};

export default IntroAnimation;
