import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar";
import React from "react";
import { cn } from "src/lib/utils";

export const metadata: Metadata = {
  title: "Sample",
  description: "Sample",
  authors: [{ name: "Ali Asadollahi", url: "https://github.com/aliasadolahi74" }],
};

const workSans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({
                                     children,
                                   }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body className={cn(`${workSans.className} antialiased h-full w-full flex`)}>
    <Sidebar />
    <main className="flex-1 p-6">{children}</main>
    </body>
    </html>
  );
}
