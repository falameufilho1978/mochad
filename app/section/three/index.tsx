import React from 'react';
import styles from './three.module.css';

const Three = () => {
  return (
    <>
      <div className={styles.section}>
        <img src="../second.webp" alt="" className={styles.image} />
        <div className={styles.content}>
          <h2 className={styles.h2}>What is $MOCHAD?</h2>
          <p>
            MoChad is THE community coin on Mode; designed to reward active
            community members who help grow Mode and the Onchain Cooperative.
          </p>
        </div>
      </div>
    </>
  );
};

export default Three;
