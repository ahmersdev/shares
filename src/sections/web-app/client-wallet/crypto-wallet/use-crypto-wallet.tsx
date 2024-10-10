import React, { useState, useEffect } from "react";
import { BrowserProvider, Signer } from "ethers";
import { GlobeIcon, MetaMaskIcon } from "@/assets/icons";
import { errorSnackbar } from "@/utils/api";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function useCryptoWallet() {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [walletName, setWalletName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new BrowserProvider(window.ethereum);
      setProvider(provider);
      const detectWalletName = () => {
        if (window.ethereum.isMetaMask) {
          setWalletName("MetaMask");
        } else {
          setWalletName("Other Wallet");
        }
      };
      detectWalletName();
    }
  }, []);

  const connectWallet = async (): Promise<void> => {
    if (provider) {
      try {
        await window.ethereum?.request({ method: "eth_requestAccounts" });
        const signer: Signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (error) {
        errorSnackbar();
      }
    } else {
      errorSnackbar("Please install MetaMask!");
    }
  };

  const disconnectWallet = (): void => {
    setWalletAddress("");
    setWalletName(null);
    errorSnackbar("Wallet disconnected successfully");
  };

  const WalletIcon = () => {
    if (walletName === "MetaMask") {
      return <MetaMaskIcon />;
    }
    return <GlobeIcon />;
  };

  return {
    WalletIcon,
    walletAddress,
    walletName,
    disconnectWallet,
    connectWallet,
  };
}
