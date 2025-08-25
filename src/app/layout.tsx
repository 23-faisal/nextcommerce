import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/ThemeProvider";
import Container from "@/components/themes/Container";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "atoz",
  description: "This is a full stack e-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
        // attribute="class"
        // defaultTheme="dark"
        // enableSystem={false}
        // disableTransitionOnChange
        >
          <Container>{children}</Container>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
