'use client'

import WalletConnectBtn from "@/components/walletConnectBtn";
import { Input } from "@nextui-org/input";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/providers/userContext";
import axios from "axios";
import toast from "react-hot-toast";
import { Config } from "@/config/site";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const { userName, setUserName } = useContext(UserContext);
  const { isConnected, address } = useWeb3ModalAccount();

  useEffect(() => {
    if (isConnected && userName) {
      axios.post(`${Config.apiBaseUrl}/user/create`, { addr: address, userName: userName })
        .then(res => {
          if (res.data) {
            toast.success("Saved Successfully!");
            router.push('/transfer');
          }
        })
        .catch(err => {
          console.error(err);
        })
    }
  }, [isConnected, router, userName])

  return (
    <section className="flex flex-col h-full items-center justify-between pt-16 pb-32">
      <div className="flex flex-col text-left w-full md:w-[500px] text-gradient px-8 leading-snug">
        <h2 className="text-[32px]">Welcome to Jar</h2>
        <h1>Your Assets,</h1>
        <h1 className="text-right">Our Security.</h1>
      </div>
      <Image src="/logo.svg" alt="logo-svg" width={200} height={200} className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]" />
      {
        !!userName ? (
          <WalletConnectBtn />
        ) : (
          <section className="flex flex-col gap-2 text-center">
            <h4>Type your Telegram UserName</h4>
            <div className="flex flex-row gap-2">
              <Input
                classNames={{
                  inputWrapper: "customInput",
                  input: "text-[14px] text-white",
                }}
                labelPlacement="outside"
                placeholder="telegram username"
                type="input"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              />
              < button onClick={() => setUserName(name)} className="px-4 py-1 bg-theme rounded-xl" >
                Continue
              </button >
            </div>
          </section>
        )
      }
    </section>
  );
}
