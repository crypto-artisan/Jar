'use client'

import React from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';

export default function ({ children }: { children: React.ReactNode }) {
    const { isConnected } = useWeb3ModalAccount();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const initialRequest = pathname;
        sessionStorage.setItem("initialRequest", initialRequest);
        if (!isConnected) {
            router.push("/");
        }
        else {
            const initialPath = sessionStorage.getItem('initialRequest') || "/";
            router.push(initialPath);
        }
    }, [router, isConnected]);

    return children;
}