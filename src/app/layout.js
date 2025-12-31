import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ioannis Lampropoulos | Portfolio",
  description: "Portfolio of Ioannis Lampropoulos, Software Engineer.",
  metadataBase: new URL('https://ioannislampropoulos.com'),
  openGraph: {
    title: "Ioannis Lampropoulos | Portfolio",
    description: "Portfolio of Ioannis Lampropoulos, Software Engineer.",
    url: 'https://ioannislampropoulos.com',
    siteName: 'Ioannis Lampropoulos',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Ioannis Lampropoulos | Portfolio",
    description: "Portfolio of Ioannis Lampropoulos, Software Engineer.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
