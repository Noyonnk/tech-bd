import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech BD — Digital Products",
  description: "Discover digital tools and subscriptions at Tech BD.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
