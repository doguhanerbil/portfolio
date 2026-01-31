import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { BackgroundFX } from "@/components/BackgroundFX";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmet Doguhan Erbil | Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years building scalable enterprise systems. Specializing in Java Spring Boot, React/Next.js, and PostgreSQL. Expert in WMS/ERP solutions, CI/CD pipelines, and system architecture. Available for remote opportunities.",
  keywords: [
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "React",
    "Next.js",
    "Software Engineer",
    "WMS Developer",
    "ERP Developer",
    "PostgreSQL",
    "Remote Developer",
    "Backend Developer",
    "Frontend Developer",
    "Istanbul Developer",
  ],
  authors: [{ name: "Ahmet Doguhan Erbil", url: "https://doguhanerbil.com" }],
  creator: "Ahmet Doguhan Erbil",
  metadataBase: new URL("https://doguhanerbil.com"),
  openGraph: {
    title: "Ahmet Doguhan Erbil | Full Stack Developer",
    description:
      "Building scalable systems that power real businesses. Java Spring Boot & React specialist with 3+ years in enterprise WMS/ERP solutions.",
    url: "https://doguhanerbil.com",
    siteName: "Ahmet Doguhan Erbil",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmet Doguhan Erbil - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmet Doguhan Erbil | Full Stack Developer",
    description:
      "Building scalable systems that power real businesses. Java Spring Boot & React specialist.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} antialiased relative`}
      >
        <BackgroundFX />
        <CursorSpotlight />
        {children}
      </body>
    </html>
  );
}
