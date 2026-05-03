import type { Metadata } from "next";
import {  Nunito } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/app/components/navbar";
import {Logo} from "@/app/Images/Logo";

export const metadata: Metadata = {
  title: "Dog Of The Day",
  description: "Gene",
};


const nunito = Nunito({
  subsets: ["latin"],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar logo={<Logo />} rightButtonText={"Sign In"}/>
          {children}
      </body>
    </html>
  );
}
