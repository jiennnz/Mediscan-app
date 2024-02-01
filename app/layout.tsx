import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { AuthProvider } from "@/context/contexts";

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
        <AuthProvider>
          <Toaster position="top-center" />
          {children}
          <SpeedInsights />
        </AuthProvider>
      </body>
    </html>
  );
}
