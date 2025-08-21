"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Navbar from "../Header/Navbar";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <Navbar />
      <main>{children}</main>
      {/*footer will be here  */}
    </NextThemesProvider>
  );
}
