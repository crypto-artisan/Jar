"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Web3ModalProvider } from "./web3Modal";
import ToastrProvider from "./toastrProvider";
import { SearchContext } from "./searchContext";
import { UserContext } from "./userContext";
import WalletConnectCheck from "./walletConnectCheck";

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
    const router = useRouter();
    const [keyWord, setKeyWord] = React.useState<string>('');
    const [userName, setUserName] = React.useState<string>('');

    const searchContextProps = {
        keyWord,
        setKeyWord
    }
    const userContextProps = {
        userName,
        setUserName
    }

    return (
        <NextUIProvider navigate={router.push}>
            <Web3ModalProvider>
                <ToastrProvider position="top-center">
                    <SearchContext.Provider value={searchContextProps}>
                        <UserContext.Provider value={userContextProps}>
                            <WalletConnectCheck>
                                {children}
                            </WalletConnectCheck>
                        </UserContext.Provider>
                    </SearchContext.Provider>
                </ToastrProvider>
            </Web3ModalProvider>
        </NextUIProvider>
    );
}
