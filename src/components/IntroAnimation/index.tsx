import React, { useRef } from 'react';
import { useTrail, animated, useSpring, useChain } from 'react-spring';

import { MessageWrapper, Slider } from './styles';

interface IntroAnimationProps {
  animationsRefs: React.MutableRefObject<any>[];
}

const msgs = ['Creating inovation', 'For Everyday', 'People'];

const IntroAnimation: React.FC<IntroAnimationProps> = ({ animationsRefs }) => {
  const trailRef = useRef(null);
  const blackContainerOutRef = useRef(null);
  const sliderRef = useRef(null);

  const trail = useTrail(msgs.length, {
    transform: 'translateY(0px)',
    opacity: 1,
    from: { transform: 'translateY(120px)', opacity: 0 },
    config: {
      mass: 5,
      tension: 2000,
      friction: 100,
      duration: 1000,
      delay: 400,
      precision: 0.1,
    },
    ref: trailRef,
  });

  const outMessageWrapperProps = useSpring({
    transform: 'translate3d(0, -100%, 0)',
    config: { duration: 200 },
    from: { transform: 'translate3d(0, 0%, 0)' },
    ref: blackContainerOutRef,
  });

  const sliderProps = useSpring({
    transform: 'translate3d(0, -100%, 0)',
    from: { transform: 'translate3d(0, 0%, 0)' },
    ref: sliderRef,
  });

  useChain([trailRef, blackContainerOutRef, sliderRef, ...animationsRefs]);

  return (
    <>
      <MessageWrapper style={outMessageWrapperProps}>
        {trail.map(({ ...rest }, index) => (
          <h2>
            <animated.span style={{ ...rest, animationDelay: 'initial' }}>
              {msgs[index]}
            </animated.span>
          </h2>
        ))}
      </MessageWrapper>

      <Slider style={{ ...sliderProps }} />
    </>
  );
};

export default IntroAnimation;
