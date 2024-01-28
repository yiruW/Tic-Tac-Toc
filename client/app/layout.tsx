'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });
const pages = [
  { name: 'Game Board', href: '/game'},
  { name: 'Logs', href: '/logs'}
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            Tic Tac Toc
          </Typography>
            {/* {pages.map((page) => {
              return (
                <Button href={page.href} sx={{ background: "#fff", mx: 1}}>{page.name}</Button>
              );
            })} */}
        </Toolbar>
      </AppBar>
      <body className={inter.className}>{children}</body>
    </div>
  );
}
