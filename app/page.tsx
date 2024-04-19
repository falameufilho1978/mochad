'use client';

import One from './section/one';
import Two from './section/two';
import Three from './section/three';
import Four from './section/four';
import Five from './section/five';
import {useState} from 'react'

export default function Home() {
  function connectWallet() {
    console.log('Clicked');
  }

  const [isCopied, setIsCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText("0xcda802a5bffaa02b842651266969a5bba0c66d3e");
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (err) {
      console.error('Fehler beim Kopieren', err);
    }
  };

  return (
    <>
      <nav>
        <img src="../mochad.svg" alt="Mochad" className="logo" />
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a
            href="https://dexscreener.com/mode/0xf927bf4a4170f29c429ad3b9d953e57df3691ec9"
            target="_blank"
            className="social-links"
          >
            <img src="../dex.png" width="100" />
          </a>
          <a
            href="https://twitter.com/mochadcoin"
            target="_blank"
            className="social-links"
          >
            <img src="../x.svg" width="100" />
          </a>
          <a
            href="https://www.dextools.io/app/en/mode/pair-explorer/0xf927bf4a4170f29c429ad3b9d953e57df3691ec9?t=1713429726813"
            target="_blank"
            className="social-links"
          >
            <img src="../dextool.png" width="100" />
          </a>
          <a
            href="https://www.coingecko.com/en/coins/mochadcoin"
            target="_blank"
            className="social-links"
          >
            <img src="../geko.png" width="100" />
          </a>
          <a
              href="https://t.me/MoChadCoin"
              target="_blank"
              className="social-links"
            >
              <img src="../telegram.png" width="100" />
            </a>
        </div>
      </nav>
      <header>
        <div className="header-content">
          <h1>
            BE A <br /> <span style={{ color: 'var(--yellow)' }}>MOCHAD</span>
          </h1>
          <p>MoChad is THE community coin on Mode.</p>
          <button onClick={copyAddress} style={{ backgroundColor: isCopied ? 'green' : 'var(--yellow)', color: isCopied ? 'white' : '#000'}}>Copy Contract Address</button>
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
          </div>
        </div>
      </footer>
    </>
  );
}
