import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  };
type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
      <Navbar />
       {children}
      </body>
    </html>
  );
}
