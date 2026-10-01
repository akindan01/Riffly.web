import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://riffly.click";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Riffly — The App for Working Musicians",
    template: "%s | Riffly",
  },

  description:
    "Riffly helps working musicians manage gigs, setlists, practice, invoices, and connections in one focused app.",

  authors: [{ name: "Riffly" }],
  creator: "Riffly",
  publisher: "Riffly",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    title: "Riffly — The App for Musicians & Music Creatives",
    description:
      "Manage gigs, setlists, practice, invoices, and musician connections in one focused app built for working musicians.",
    url: siteUrl,
    siteName: "Riffly",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/riffly.png",
        width: 1200,
        height: 630,
        alt: "Riffly — The App for Working Musicians",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Riffly — The App for Working Musicians",
    description:
      "Manage gigs, setlists, practice, invoices, and musician connections in one focused app built for working musicians.",
    images: ["/riffly.png"],
    creator: "@riffly_io",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
