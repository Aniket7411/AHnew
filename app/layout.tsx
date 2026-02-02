import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Layout from "@/components/reactcomponents/layout/Layout";

export const metadata: Metadata = {
  title: "AH",
  description: "AH",
  verification: {
    google: "-NgSwQ3yg9D0Ckm6ig8IHAsI3vtZVojG7YfhHw7uviU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
