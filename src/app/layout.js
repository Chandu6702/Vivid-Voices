import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " max-w-screen-2xl mx-auto h-svh overflow-x-hidden justify-center items-center px-3 sm:px-6 lg:px-10 xl:px-20 2xl:px-24"
        }
      >
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <Navbar />
              <div className="flex justify-center">{children}</div>
              <Footer />
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
