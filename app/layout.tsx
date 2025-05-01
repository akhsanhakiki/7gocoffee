import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "7GO Coffee & Detak 7GO Roastery | Premium Coffee Experience",
  description:
    "Discover 7GO Coffee for freshly brewed specialty drinks and Detak 7GO Roastery for premium hand-roasted coffee beans. Crafted with passion, brewed with precision.",
  keywords:
    "coffee, roastery, 7GO coffee, detak 7GO, specialty coffee, indonesian coffee, coffee beans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
