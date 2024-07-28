"use client"

import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";

import { siteConfig } from "@/config/site";

import InitCustomCursor from "@/components/InitCustomCursor";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path: any = usePathname();
  // Define your background classes for different routes
  const backgroundClassNames: any = {
    '/': 'bg-landing',
    '/transfer': 'bg-transfer',
    '/join': 'bg-landing',
    '/accept': 'bg-landing',
  };
  const backgroundClassName = backgroundClassNames[path];

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          `h-screen overflow-hidden`,
          backgroundClassName
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main className="relative flex flex-col h-screen">
            {children}
          </main>
          <InitCustomCursor />
        </Providers>
      </body>
    </html>
  );
}
