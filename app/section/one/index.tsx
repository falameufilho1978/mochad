import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './one.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const One = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateXPosition = (start:number, end:number, delay = 400, scrollRange = 400) => {
    const adjustedScrollY = Math.max(scrollY - delay, 0);
    const progress = Math.min(adjustedScrollY / scrollRange, 1);
    return start + (end - start) * progress;
  };

  return (
    <>
      <motion.div
        ref={ref}
        className={styles.inner}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className={styles.subheadline} variants={itemVariants}>
          MoChad Manifesto
        </motion.div>
        <motion.h2 className={styles.h2} variants={itemVariants}>
          Embrace the Degen Within.
        </motion.h2>
        <motion.p variants={itemVariants}>
          We all have a bit of degen in us. It's that spark that makes us leap
          into the unknown, chase the thrill of the next big thing, and join
          forces with a community that gets it. MoChad is more than just a meme
          coin; it's a badge of honor for the bold, the dreamers, and yes, the
          degens of the Mode Network. Be a MoChad.
        </motion.p>
        <motion.div className={styles.sub} variants={itemVariants}>
          <h3 className={styles.h3}>VISION</h3>
          <p>
            Infinite-Sum Game: Unlimited wins and opportunities for MoChads on
            Mode
          </p>
        </motion.div>
        <motion.div className={styles.sub} variants={itemVariants}>
          <h3 className={styles.h3}>Mission</h3>
          <p>Grow Mode. Grow MoChad. Reward Community.</p>
        </motion.div>
      </motion.div>
      <motion.img
        src="../dude-left.webp"
        alt="Dude"
        className={styles.left}
        style={{ x: calculateXPosition(-300, 0) }}
      />
      <motion.img
        src="../dude.webp"
        alt="Dude"
        className={styles.right}
        style={{ x: calculateXPosition(300, 0) }}
      />
    </>
  );
};

export default One;
