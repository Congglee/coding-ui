import { Rubik } from "next/font/google";
import "@/styles/general.css";
import Wrapper from "@/components/wrapper";

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
      </body>
    </html>
  );
}
