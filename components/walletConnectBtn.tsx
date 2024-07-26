"use client";
import {
    useWeb3Modal,
    useWeb3ModalAccount
} from "@web3modal/ethers5/react";

import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function WalletConnectBtn() {

    const { open } = useWeb3Modal();
    const { isConnected } = useWeb3ModalAccount();
    return (
        <>
            {
                !isConnected ? (
                    <Button
                        className="bg-theme w-[300px] py-8 rounded-xl text-white text-[20px]"
                        onClick={() => open()}
                        startContent={<Image src="/Metamask.svg" alt="metamask-wallet" width={40} height={40} className="pr-2" />}
                    >
                        Connect to Metamask
                    </Button>
                ) : (
                    <div className="flex flex-row gap-4">
                        <button
                            className="bg-theme w-[220px] py-4 rounded-xl text-[20px]"
                            onClick={() => open({ view: "Account" })}
                        >
                            User Acount
                        </button>
                        <button
                            className="bg-theme w-[220px] py-4 rounded-xl text-[20px]"
                            onClick={() => open({ view: "Networks" })}
                        >
                            Choose Network
                        </button>
                    </div>
                )
            }
        </>
    )
}