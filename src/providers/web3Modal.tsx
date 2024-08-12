"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "faf641330f6b3ce2811bb5eb411267df";

// 2. Set chains
const chains = [
    {
        chainId: 295,
        name: "Hedera Mainnet",
        currency: "HBAR",
        explorerUrl: "https://hashscan.io/mainnet",
        rpcUrl: "https://mainnet.hashio.io/api",
    },
    {
        chainId: 296,
        name: "Hedera Testnet",
        currency: "HBAR",
        explorerUrl: "https://hashscan.io/testnet",
        rpcUrl: "https://testnet.hashio.io/api",
    },
];

const ethersConfig = defaultConfig({
    metadata: {
        name: "Web3Modal",
        description: "Web3Modal Laboratory",
        url: "https://web3modal.com",
        icons: ["https://avatars.githubusercontent.com/u/37784886"],
    },
    defaultChainId: 1,
    rpcUrl: "https://cloudflare-eth.com",
});

createWeb3Modal({
    ethersConfig,
    chains,
    projectId,
    enableAnalytics: true,
    themeMode: "dark",
});

export function Web3ModalProvider({ children }: { children: any }) {
    return children;
}
