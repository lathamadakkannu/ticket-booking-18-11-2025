"use client";

import "@/styles/globals.css";  

import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import AppLayout from "@/components/Layout/AppLayout";
import EmotionCacheProvider from "@/theme/EmotionCacheProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: `"${geistSans.style.fontFamily}", "${geistMono.style.fontFamily}", sans-serif`,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <EmotionCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box minHeight="100vh" display="flex" flexDirection="column">
              <AppLayout>{children}</AppLayout>
            </Box>
          </ThemeProvider>
        </EmotionCacheProvider>
      </body>
    </html>
  );
}
