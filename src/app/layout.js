import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tblog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#9b45fe] max-w-[1440px] my-0 mx-auto font-PacificFont">
    <head>
    </head>
      <body className={inter.className}>
      <Navbar />
      {children}
      </body>
    </html>
  );
}
