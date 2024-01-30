import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
const cabin = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediScan",
  description: "The MediScan App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
