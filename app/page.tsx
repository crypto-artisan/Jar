'use client'

import WalletConnectBtn from "@/components/walletConnectBtn";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { isConnected } = useWeb3ModalAccount();

  useEffect(() => {
    if (isConnected) {
      router.push('/transfer');
    }
  }, [isConnected, router])
  const gradientStyle = {
    background: '-webkit-linear-gradient(30deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.6) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };
  return (
    <section className="flex flex-col h-full items-center justify-between pt-16 pb-32">
      <div className="flex flex-col text-left w-full md:w-[500px] text-gradient px-8 leading-snug">
        <h2 className="text-[32px]">Welcome to Jar</h2>
        <h1>Your Assets,</h1>
        <h1 className="text-right">Our Security.</h1>
      </div>
      <Image src="/logo.svg" alt="logo-svg" width={200} height={200} className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]" />
      <WalletConnectBtn />
    </section>
  );
}
