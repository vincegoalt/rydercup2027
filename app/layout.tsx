import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ireland Golf Planner - Ryder Cup 2027 at Adare Manor",
  description: "Your complete guide to the 2027 Ryder Cup at Adare Manor and golf trips in Ireland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Redirect root to /en
  if (typeof window === 'undefined') {
    redirect('/en');
  }

  return children;
}
