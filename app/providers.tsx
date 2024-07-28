"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Web3ModalProvider } from "./contexts/Web3Modal";
import ToastrProvider from "@/components/toastrProvider";
import { SearchContext } from "./contexts/searchContext";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const [keyWord, setKeyWord] = React.useState<string>('');
  const value = {
    keyWord,
    setKeyWord
  }
  return (
    <NextUIProvider navigate={router.push}>
      <Web3ModalProvider>
        <ToastrProvider position="top-center">
          <SearchContext.Provider value={value}>
            {children}
          </SearchContext.Provider>
        </ToastrProvider>
      </Web3ModalProvider>
    </NextUIProvider>
  );
}
