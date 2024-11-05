import Wrapper from "@/components/wrapper";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Lasles VPN",
  description:
    "LaslesVPN is a fast, secure, and reliable VPN service that protects your privacy online.",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.svg" },
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
