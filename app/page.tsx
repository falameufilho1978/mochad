'use client';

import One from './section/one';
import Two from './section/two';
import Three from './section/three';
import Four from './section/four';
import Five from './section/five';

export default function Home() {
  function connectWallet() {
    console.log('Clicked');
  }

  return (
    <>
      <nav>
        <img src="../mochad.svg" alt="Mochad" className="logo" />
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a
            href="https://twitter.com/mochadcoin"
            target="_blank"
            className="social-links"
          >
            <img src="../x.svg" width="100" />
          </a>
          <button onClick={connectWallet}>Connect Wallet</button>
        </div>
      </nav>
      <header>
        <div className="header-content">
          <h1>
            BE A <br /> <span style={{ color: 'var(--yellow)' }}>MOCHAD</span>
          </h1>
          <p>MoChad is THE community coin on Mode.</p>
          <button>Claim $MCC</button>
        </div>
        <video loop autoPlay playsInline muted className="header-video">
          <source src="../coin.mp4" type="video/mp4" />
        </video>
      </header>
      <main>
        <section>
          <One />
        </section>
        <section>
          <Two />
        </section>
        <section>
          <Three />
        </section>
        <section>
          <Four />
        </section>
        <section>
          <Five />
        </section>
      </main>
      <footer>
        <video loop autoPlay playsInline muted className="footer-video">
          <source src="../mochad.mp4" type="video/mp4" />
        </video>
        <div className="footer-links">
          <img src="../mochad.svg" width="100" />
          <div style={{ display: 'flex', gap: '24px' }}>
            <a
              href="https://twitter.com/mochadcoin"
              target="_blank"
              className="social-links"
            >
              <img src="../x.svg" width="100" />
            </a>
            <a
              href="https://t.me/MoChadCoin"
              target="_blank"
              className="social-links"
            >
              <img src="../telegram.png" width="100" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
