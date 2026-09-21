import { useEffect, useRef, ReactNode, type FC } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
}

const ScrollFadeIn: FC<ScrollFadeInProps> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -150px 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1],
          }
        },
      }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
