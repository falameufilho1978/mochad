import React, { useRef } from 'react';
import styles from './two.module.css';
import { motion, useInView } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Two = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <>
      <div ref={ref} className={styles.circle}>
        <motion.div
          className={styles.circleInner}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          The Virtuous MoChad Cycle
        </motion.div>
        <div className={styles.circleOuter}>
          <motion.img
            src="../circle.svg"
            alt=""
            className={styles.circleImage}
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          />
        </div>
      </div>
      <motion.p
        className={styles.text}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        MoChad was born to throw rocket fuel on Mode’s existing meme culture and community. $MOCHAD exists to reward the MoChads.
      </motion.p>
    </>
  );
};

export default Two;
