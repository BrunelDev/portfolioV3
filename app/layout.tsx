import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: 'LlVYnhw4jbz07ulgU0czKmNT1tut8HaF9TFUtF7r1Pk',
  },
  title: "Brunel Ahokpossi | Software Developer",
  description:
    "Software developer specializing in web development, mobile apps, and DevOps. Experienced with React, Next.js, Django, AWS and more.",
  keywords: [
    "Software Developer",
    "Web Development",
    "React",
    "Next.js",
    "Django",
    "DevOps",
    "AWS",
    "Full Stack Developer",
  ],
  authors: [{ name: "Brunel Ahokpossi" }],
  creator: "Brunel Ahokpossi",
  publisher: "Brunel Ahokpossi",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio-3-0-rmvs.onrender.com",
    title: "Brunel Ahokpossi | Software Developer",
    description:
      "Software developer specializing in web development, mobile apps, and DevOps",
    siteName: "Brunel Ahokpossi Portfolio",
    images: [
      {
        url: "/moi.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Brunel Ahokpossi - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brunel Ahokpossi | Software Developer",
    description:
      "Software developer specializing in web development, mobile apps, and DevOps",
    images: ["/twitter-card.png"], // Add your Twitter card image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#151718]`}
      >
        {children}
      </body>
    </html>
  );
}
