import React from 'react';
import { motion } from 'framer-motion';
import styles from './five.module.css';

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

const Five = () => {
  return (
    <>
      <motion.h2 className={styles.h2} variants={itemVariants}>
        Tokenomics
      </motion.h2>
      <motion.p className={styles.subheadline}>
        690,000,000,000,000 MoChad Tokens Ticker MCC
      </motion.p>
      <div className={styles.content}>
        <img src="../chart.webp" alt="Chart" className={styles.chart} />
        <div className={styles.contentInner}>
          <h3 className={styles.h3}>
            A massive part of $MCC will be dropped on Mode early supporters and
            creators who are active participants.
          </h3>
          <ol>
            <li>40% Ticker MCC LP</li>
            <li>30% Marketing</li>
            <li>20% Airdrops</li>
            <li>10% Treasury</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Five;
