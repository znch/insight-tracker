import type { Metadata } from "next";
import { Geist, Geist_Mono, Uncial_Antiqua, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}


const unicial = Uncial_Antiqua({
  weight: ["400"],
  subsets: ["latin"]
})

const cinzel = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Insight",
  description: "TTRPG Character tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
