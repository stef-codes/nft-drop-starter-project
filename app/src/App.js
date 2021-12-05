import React from 'react';
import './App.css';
import twitterLogo from './assets/twitter-logo.svg';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  // Actions 

  /* Declare your function */

  const CheckIfWalletIsConnected = async () => {

    try{ 
      const {solana} = window; 

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom Wallet Found!'); 
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻'); 
      }
    } catch (error) {
      console.error(error); 
    }
  }; 

    /*
   * When our component first mounts, let's check to see if we have a connected
   * Phantom Wallet
   */

    useEffect(() => {
      const onLoad = async() => {
      await CheckIfWalletIsConnected(); 
    }; 
    window.addEventListener('load', onload); 
    return () => window.removeEventListener('load', onLoad); 
  }, []); 


  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍭 Music Drop</p>
          <p className="sub-text">Mint Loops as NFTs </p>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
