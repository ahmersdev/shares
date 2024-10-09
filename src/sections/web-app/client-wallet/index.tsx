"use client";
import React, { useState, useEffect } from 'react';
import { ethers, BrowserProvider, Signer } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function ClientWallet(): JSX.Element {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new BrowserProvider(window.ethereum);
      setProvider(provider);
    }
  }, []);

  const connectWallet = async (): Promise<void> => {
    if (provider) {
      try {
        // Request account access
        await window.ethereum?.request({ method: 'eth_requestAccounts' });
        const signer: Signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      console.log("Please install MetaMask!");
    }
  };

  return (
    <div>
      <h1>Wallet Connection</h1>
      {walletAddress ? (
        <p>Connected Wallet: {walletAddress}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}