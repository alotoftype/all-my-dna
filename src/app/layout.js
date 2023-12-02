import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All My DNA",
  description: "All My DNA",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <footer>
          Copyright ©️ 2023 All My DNA, LLC - All Rights Reserved.
        </footer> */}
      </body>
    </html>
  );
}
