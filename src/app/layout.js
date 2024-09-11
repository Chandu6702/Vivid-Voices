import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full min-h-screen flex flex-col items-center justify-between bg-white text-black p-4">
          <Navbar />
          <main className="flex-grow w-full flex justify-center">
            <div className="content-wrapper w-full min-w-full">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
