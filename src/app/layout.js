import React from "react";
import Head from "next/head";
// import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import App from "./_app";
import { Providers } from "./redux/provider";

const poppins = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.SITE_URL;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Snapshwat: The AI-Powered Face Swap App",
    template: "%s | Snapshwat: The AI-Powered Face Swap App",
  },
  description:
    "Swap faces with your friends, celebrities, or funny characters with Snapshwat's cutting-edge AI technology.",
  keywords:
    "face swap, face change, reimagine, ai face swap, face swap ai, face swap free, face changer, photo face swap, swap face ai, picture face swap, ai change face, ai face swap free, free ai face swap, ai swap face, ai face changer, face swap ai free, swap face online free, best face swap, image face swap, free face swap ai, best ai face swap, ai face swap online free, ai swap, best face swap ai, face switch, change face ai, ai face swap photo, faceswap ai free, ai photo face swap, free photo face swap, photo face changer, switch faces in photo, professional face swap, face change ai, face replace ai, swap a face on a picture, face swap any picture, easy face swap, face ai swap, ai face swap picture, free ai faceswap, swap face from one photo to another, ai image face swap, face swap photo free, swap faces ai, face swap from one photo to another, face swap ai photo, free faceswap ai, face swap in photo, free swap face, face swap app, face swap online, face swap with ai, swap face ai free, face swap photo ai, ai face swap image, ai swap faces, swap picture, face swap an image, face swap face, photo face swap ai, ai swap face free, all face swap, swap face image, face interchange, face swap easy, ai photo swap, face swap with image, family photo face swap, best face swap app, pic swapping, face swap on a picture",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snapshwat.com",
    site_name: "Snapshwat",
    title: "Snapshwat: The AI-Powered Face Swap App",
    description:
      "Swap faces with your friends, celebrities, or funny characters with Snapshwat's cutting-edge AI technology.",
    // image: "https://www.snapshwat.com/images/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Snapshwat",
    title: "Snapshwat: The AI-Powered Face Swap App",
    description:
      "Swap faces with your friends, celebrities, or funny characters with Snapshwat's cutting-edge AI technology.",
    // image: "https://www.snapshwat.com/images/twitter-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        {/* <meta property="og:image" content={metadata.openGraph.image} /> */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        {/* <meta name="twitter:image" content={metadata.twitter.image} /> */}
        <link rel="canonical" href={metadata.openGraph.url} />
        <title>{metadata.title.default}</title>
      </Head>
      <body className={poppins.className}>
        <App />

        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
