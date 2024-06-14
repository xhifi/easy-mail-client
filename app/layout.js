import { Inter } from "next/font/google";
import "./globals.css";
import ContextsProvider from "@/app/src/contexts/ContextsProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Easy Mail",
  description: "Easy Mail utility for mass email sending",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextsProvider>
        <body className={inter.className}>{children}</body>
      </ContextsProvider>
    </html>
  );
}
