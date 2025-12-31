import "../globals.css";
import { Inter, Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

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

export const viewport = {
  themeColor: '#38bdf8',
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
