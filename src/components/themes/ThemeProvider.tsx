"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/footer/Footer";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <main className="flex-1  ">{children}</main>
        <Footer />
      </div>
    </NextThemesProvider>
  );
}
