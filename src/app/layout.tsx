"use client";

import "./globals.css";
import { Providers } from "./providers";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      background: "#fff",
      text: "#1d1d1d",
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#1d1d1d",
      text: "#fff",
    }, // override dark theme colors
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NextThemesProvider
          defaultTheme="dark"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className,
          }}
        >
          <Providers>{children}</Providers>
        </NextThemesProvider>
      </body>
    </html>
  );
}
