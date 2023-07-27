import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/layout/front/Header";
import Footer from "../components/layout/front/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "vougevista",
  description: "Vougevista",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
