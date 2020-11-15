import React, { useCallback, useEffect } from 'react';

import { MessageWrapper, Slider } from './styles';
import { motion, useAnimation } from 'framer-motion';

interface IntroAnimationProps {
  animationsRefs?: React.MutableRefObject<any>[];
}

const msgs = ['Creating inovation', 'For Everyday', 'People'];

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
  exit: {
    y: '-100%',
  },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

const IntroAnimation: React.FC<IntroAnimationProps> = () => {
  const blackBgControls = useAnimation();
  const sliderControls = useAnimation();

  const sequenceAnimation = useCallback(async () => {
    await blackBgControls.start('visible');
    blackBgControls.start('exit');
    await sliderControls.start('visible');

    // setSomeProp
  }, []);

  useEffect(() => {
    sequenceAnimation();
  }, []);

  return (
    <>
      <MessageWrapper
        variants={list}
        animate={blackBgControls}
        transition={{ duration: 0.5 }}
        initial="hidden"
      >
        {msgs.map((msg) => (
          <h2>
            <motion.span variants={item}>{msg}</motion.span>
          </h2>
        ))}
      </MessageWrapper>

      <Slider
        animate={sliderControls}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {
            y: '100%',
          },
          visible: {
            y: '-100%',
          },
        }}
        initial="hidden"
      />
    </>
  );
};

export default IntroAnimation;
