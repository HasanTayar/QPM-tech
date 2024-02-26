import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderEn from "@/components/header/header-en";
import FooterEn from "@/components/footer/footer-en";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppProvider from "@/components/whatsapp-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "QPMatrix | Home Page",
  description:
    "We are a leading web and app development company in Israel, specializing in using the most innovative technologies, such as WordPress, HTML, CSS, JS, React, and Angular. We are proud to offer our clients high-quality and professional services, that suit their needs and budget. In addition, we provide comprehensive digital marketing services, including organic promotion, Google advertising, social media management, and more. If you are looking for a perfect solution for your digital presence, we are here for you!",
  openGraph: {
    // Specify the title of your content
    title: "QPMatrix | Home Page",
    // Specify the description of your content
    description:
      "We are a leading web and app development company in Israel, specializing in using the most innovative technologies, such as WordPress, HTML, CSS, JS, React, and Angular.",
    // Specify the type of your content, e.g. website, article, video, etc.
    type: "website",
    // Specify the URL of your content
    url: "https://qpmatrix.tech/",
    // Specify the image of your content, e.g. logo, screenshot, etc.
    images: [
      {
        // Specify the URL of the image
        url: "/QPM.LOGO.svg",
        // Specify the width of the image in pixels
        width: 800,
        // Specify the height of the image in pixels
        height: 600,
        // Specify the alternative text of the image
        alt: "QPMatrix Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <HeaderEn />
        <Toaster />
        {children}
        <SpeedInsights />
        <Analytics />
        <WhatsAppProvider />
        <FooterEn />
      </body>
    </html>
  );
}
