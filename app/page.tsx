import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
  description: "Login and Register Page of MediScan",
};

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <AuthFormWrapper />
    </main>
  );
}
