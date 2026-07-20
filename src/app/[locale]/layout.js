import "../globals.css";
import { Inter, Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: '#38bdf8',
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: {
      template: '%s | Ioannis Lampropoulos',
      default: t('title')
    },
    description: t('description'),
    keywords: t('keywords'),
    metadataBase: new URL('https://ioannislampropoulos.com'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://ioannislampropoulos.com',
      siteName: 'Ioannis Lampropoulos',
      locale: locale,
      type: 'website',
      images: [
        {
          url: 'https://ioannislampropoulos.com/images/profile_picture.jpg',
          width: 800,
          height: 600,
          alt: 'Ioannis Lampropoulos',
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['https://ioannislampropoulos.com/images/profile_picture.jpg'],
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ioannis Lampropoulos",
    "image": "https://ioannislampropoulos.com/images/profile.jpg",
    "telephone": "+306939379169",
    "description": "Freelance Software Engineer and Web Developer based in Thessaloniki, Greece. Specialized in Custom Web Applications, E-Commerce, and Corporate Websites.",
    "priceRange": "€400 - €1500+",
    "sameAs": [
        "https://github.com/Lampropoulosss",
        "https://www.linkedin.com/in/ioannislampropoulos05"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kalamaria",
      "addressRegion": "Thessaloniki",
      "addressCountry": "GR"
    },
    "url": "https://ioannislampropoulos.com",
    "areaServed": locale === 'el' ? "Greece" : "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Website Design"
          },
          "price": "400",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Applications"
          },
          "price": "1000",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Development"
          },
          "price": "1500",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Maintenance & Technical Support (SEO)"
          }
        }
      ]
    }
  };

  return (
    <html lang={locale} className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
