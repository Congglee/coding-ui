import { Rubik } from "next/font/google";
import Wrapper from "@/components/wrapper";
import Script from "next/script";

import "@/styles/general.css";
import "@/styles/queries.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Omnifood",
  description: "Never cook again - AI-powered meal delivery service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Wrapper>{children}</Wrapper>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        />
      </body>
    </html>
  );
}
