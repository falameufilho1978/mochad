import React from 'react';
import styles from './four.module.css';

const Four = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.h2}>How To Earn $MCC (MoTips)</h2>
        <p>
          Rewards shape results. $MCC will be distributed to MoChad & Mode
          related tweets we engage with:
        </p>
        <ul>
          <li>Create Memes</li>
          <li>
            Spread the MoChad Vibe on X
            <ol>
              <li>10% for CEX listing</li>
              <li>20% MoTips</li>
            </ol>
          </li>
          <li>Create Content about MoChad & Mode</li>
        </ul>
        <p>We will drop MoTips to the most active MoChads.</p>
      </div>
      <img src="../third.webp" alt="" className={styles.image} />
    </div>
  );
};

export default Four;
