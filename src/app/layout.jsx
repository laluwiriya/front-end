"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const disableNavbar = ["/login", "/register", "/"];

export default function RootLayout({ children }) {
  const [state, setState] = useState(0);
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </body>
    </html>
  );
}
