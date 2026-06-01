import type { Metadata } from "next";
import { Geist, Geist_Mono, Uncial_Antiqua, Cinzel_Decorative, Rosarivo } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}


const uncial = Uncial_Antiqua({
  weight: ["400"],
  subsets: ["latin"]
})

const rosarivo = Rosarivo({
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
      className={`${rosarivo.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className={`${cinzel.className} h-full antialiased mb-4`}>
          <Navbar></Navbar>
        </div>
        <div className="px-2 sm:px-8">
        {children}
        </div>
      </body>
    </html>
  );
}
